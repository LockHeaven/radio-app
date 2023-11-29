import { Component } from '@angular/core';
import { SideMenuCardComponent } from '../side-menu-card/side-menu-card.component';
import { Radio, dataRadio } from 'src/assets/data/radios.data';
import { SideMenuItemComponent } from '../side-menu-item/side-menu-item.component';

@Component({
  selector: 'aside-menu',
  templateUrl: './aside-menu.component.html',
  styles: ``,
  standalone: true,
  imports: [SideMenuCardComponent, SideMenuItemComponent],
})
export class AsideMenuComponent {
  playlist: Radio[] = [];

  constructor() {
    this.playlist = dataRadio;
  }
}
