import { Component, inject } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { VolumeIconComponent } from '../../icons/volume-icon/volume-icon.component';
import { VolumeSilenceIconComponent } from '../../icons/volume-silence-icon/volume-silence-icon.component';

@Component({
  selector: 'volume-control',
  templateUrl: './volume-control.component.html',
  styles: ``,
  standalone: true,
  imports: [VolumeSilenceIconComponent, VolumeIconComponent],
})
export class VolumeControlComponent {
  volume: number = 100;
  volumeAux: number = 100;

  playerService = inject(PlayerService);

  setMute(): void {
    if (this.isVolumeSilence) {
      this.volume = this.volumeAux;
      this.playerService.setVolume(this.volume);
      this.playerService.setIsMuted(false);
    } else {
      this.volumeAux = this.volume;
      this.volume = 0;
      this.playerService.setVolume(0);
      this.playerService.setIsMuted(true);
    }
  }

  onChangeVolume(volume: Event): void {
    const volumeValue = volume.target as HTMLInputElement;
    const newVolume = volumeValue.valueAsNumber;
    this.playerService.setVolume(newVolume);
    this.volume = volumeValue.valueAsNumber;
  }

  get isVolumeSilence(): boolean {
    return this.volume < 1;
  }
}
