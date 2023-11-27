import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayer, YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-youtibe',
  standalone: true,
  imports: [CommonModule, YouTubePlayerModule],
  templateUrl: './youtibe.component.html',
  styleUrl: './youtibe.component.css',
})
export class YoutibeComponent {
  @ViewChild('Yutu') yutu!: YouTubePlayer;
  play(): void {
    this.yutu.playVideo();
  }

  pause(): void {
    this.yutu.pauseVideo();
  }
}
