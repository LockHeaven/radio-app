import { Component, OnInit, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService } from 'src/app/services/player.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Radio } from 'src/assets/data/radios.data';
import { timer } from 'rxjs';
import { loadingImages } from 'src/assets/data/loading.data';

@Component({
  selector: 'background-radio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './background-radio.component.html',
  styles: ``,
})
export class BackgroundRadioComponent {
  playerService = inject(PlayerService);
  activatedRoute = inject(ActivatedRoute);

  currentRadio!: Radio;

  loading = false;

  hasError = false;

  background: string = '';

  constructor() {
    effect(() => {
      this.currentRadio = this.playerService.currentRadio;
      this.loadingBackground();
      this.loading = true;
      timer(1500).subscribe(() => {
        this.loading = false;
        if (this.hasError) {
          return;
        }
        this.background = this.currentRadio.background;
      });
    });

    effect(() => {
      this.hasError = this.playerService.hasError;
      if (this.hasError) {
        this.loadingBackground();
      }
    });
  }

  loadingBackground(): void {
    const loadingCount = loadingImages.length;
    const randomIndex = Math.floor(Math.random() * loadingCount);
    this.background = loadingImages[randomIndex].img;
  }
}
