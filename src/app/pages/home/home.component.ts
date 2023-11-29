import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { dataRadio } from 'src/assets/data/radios.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {
  routerService = inject(Router);

  playerService = inject(PlayerService);

  start(): void {
    this.playerService.setCurrentRadio(dataRadio[0]);
    this.routerService.navigate(['/radio', dataRadio[0].id]);
  }
}
