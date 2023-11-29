import { Component } from '@angular/core';
import { PlayerComponent } from '../../components/player/player.component';
import { RouterOutlet } from '@angular/router';
import { AsideMenuComponent } from '../../components/aside-menu/aside-menu.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: `
  #app {
    display: grid;
    grid-template-areas:
      "aside main"
      "player player";
    grid-template-columns: 20vw 1fr;
    grid-template-rows: 1fr auto;
  }`,
  standalone: true,
  imports: [AsideMenuComponent, RouterOutlet, PlayerComponent],
})
export class MainComponent {}
