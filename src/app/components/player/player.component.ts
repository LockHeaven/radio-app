import {
  AfterViewInit,
  Component,
  ViewChild,
  effect,
  inject,
} from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { VolumeControlComponent } from '../volume-control/volume-control.component';
import { NextIconComponent } from '../../icons/next-icon/next-icon.component';
import { PlayIconComponent } from '../../icons/play-icon/play-icon.component';
import { PauseIconComponent } from '../../icons/pause-icon/pause-icon.component';
import { PreviousIconComponent } from '../../icons/previous-icon/previous-icon.component';
import { YouTubePlayerModule, YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styles: ``,
  standalone: true,
  imports: [
    PreviousIconComponent,
    PauseIconComponent,
    PlayIconComponent,
    NextIconComponent,
    VolumeControlComponent,
    YouTubePlayerModule,
  ],
})
export class PlayerComponent implements AfterViewInit {
  @ViewChild('YoutubePlayer') youtubePlayer!: YouTubePlayer;

  radioId: string = '';

  isPlaying = false;

  playerService = inject(PlayerService);

  playerVars = { controls: 0, disablekb: 1 };

  constructor() {
    effect(
      () => {
        if (this.playerService.radioReady) {
          this.playerService.setIsPlaying(true);
          this.youtubePlayer.setVolume(this.playerService.volume);
          this.youtubePlayer.playVideo();
          return;
        }
      },
      { allowSignalWrites: true }
    );
    effect(() => {
      this.playerService.isPlaying
        ? this.youtubePlayer.playVideo()
        : this.youtubePlayer.pauseVideo();
    });
    effect(() => {
      this.playerService.isMuted
        ? this.youtubePlayer.mute()
        : this.youtubePlayer.unMute();
    });
    effect(() => {
      this.youtubePlayer.setVolume(this.playerService.volume);
    });
    effect(() => {
      const { id } = this.playerService.currentRadio;
      if (id) {
        this.radioId = id;
        this.youtubePlayer.setVolume(100);
      }
    });
  }
  ngAfterViewInit(): void {
    this.youtubePlayer.stateChange.subscribe((e: YT.OnStateChangeEvent) => {
      if (e.data === 1 || e.data === 5) {
        this.playerService.setHasError(false);
        this.playerService.setRadioReady(true);
      } else if (e.data === -1 || e.data === 3) {
        this.playerService.setRadioReady(false);
      }
    });

    this.youtubePlayer.error.subscribe(() => {
      this.playerService.setHasError(true);
      this.playerService.setIsPlaying(false);
    });
  }

  nextRadio(): void {
    this.youtubePlayer.pauseVideo();
    this.playerService.nextRadio();
  }

  previousRadio(): void {
    this.youtubePlayer.pauseVideo();
    this.playerService.previousRadio();
  }

  play(): void {
    this.playerService.setIsPlaying(!this.playerService.isPlaying);
  }
}
