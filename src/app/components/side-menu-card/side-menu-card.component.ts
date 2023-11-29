import { Component, Input, OnChanges, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Radio } from 'src/assets/data/radios.data';
import { PlayerService } from 'src/app/services/player.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'side-menu-card',
  templateUrl: './side-menu-card.component.html',
  styles: '',
  standalone: true,
  imports: [RouterLink, CommonModule],
})
export class SideMenuCardComponent implements OnChanges {
  @Input() radioItem?: Radio;

  playerService = inject(PlayerService);

  currentRadio!: Radio;

  classPlaying: string = '';

  alt: string = '';

  constructor() {
    effect(() => {
      this.currentRadio = this.playerService.currentRadio;
    });
  }

  ngOnChanges(): void {
    const { author, title } = this.radioItem!;
    this.alt = `Cover of ${title} by ${author}`;
  }

  setRadio(): void {
    this.playerService.setCurrentRadio(this.radioItem!);
  }

  get isCurrentRadio(): boolean {
    if (this.radioItem?.id && this.currentRadio?.id) {
      return this.radioItem.id === this.currentRadio.id;
    }
    return false;
  }
}
