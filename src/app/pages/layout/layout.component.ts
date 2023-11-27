import { Component } from '@angular/core';
import { Playlist, playlists } from 'src/app/interfaces/playlistData.interface';
import { PlaylistItemCardComponent } from '../../components/playlist-item-card/playlist-item-card.component';
import { GreetingComponent } from '../../components/greeting/greeting.component';

@Component({
    selector: 'layout',
    templateUrl: './layout.component.html',
    styles: ``,
    standalone: true,
    imports: [GreetingComponent, PlaylistItemCardComponent]
})
export class LayoutComponent {
  playlist: Playlist[] = [];

  constructor() {

    this.playlist = playlists;

  }
}
