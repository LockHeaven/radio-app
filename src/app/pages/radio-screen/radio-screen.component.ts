import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundRadioComponent } from 'src/app/components/background-radio/background-radio.component';
import { PlayerService } from 'src/app/services/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-radio-screen',
  standalone: true,
  imports: [CommonModule, BackgroundRadioComponent],
  templateUrl: './radio-screen.component.html',
  styles: ``,
})
export class RadioScreenComponent implements OnInit {
  playerService = inject(PlayerService);

  routerService = inject(Router);

  ngOnInit(): void {
    if (!this.playerService.currentRadio.id) {
      this.routerService.navigate(['/home']);
    }
  }
}
