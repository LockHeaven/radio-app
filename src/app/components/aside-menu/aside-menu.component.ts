import { Component } from '@angular/core';
import { Playlist, playlists } from 'src/app/interfaces/playlistData.interface';
import { SideMenuCardComponent } from '../side-menu-card/side-menu-card.component';
import { SideMenuItemComponent } from '../side-menu-item/side-menu-item.component';

@Component({
    selector: 'aside-menu',
    templateUrl: './aside-menu.component.html',
    styles: ``,
    standalone: true,
    imports: [SideMenuItemComponent, SideMenuCardComponent]
})
export class AsideMenuComponent {

  playlist: Playlist[] = [];

  constructor() {

    this.playlist = playlists;

  }
}
