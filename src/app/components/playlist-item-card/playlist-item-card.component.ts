import { Component, Input, OnChanges } from '@angular/core';
import { Playlist } from 'src/app/interfaces/playlistData.interface';
import { RouterLink } from '@angular/router';
import { CardPlayButtonComponent } from '../card-play-button/card-play-button.component';

@Component({
    selector: 'playlist-item-card',
    templateUrl: './playlist-item-card.component.html',
    styles: ``,
    standalone: true,
    imports: [CardPlayButtonComponent, RouterLink]
})
export class PlaylistItemCardComponent implements OnChanges {
  @Input() playlistItem!: Playlist;
  artistsString: string = '';
  alt: string = '';

  ngOnChanges(): void {

    const { artists, title } = this.playlistItem;
    this.artistsString = artists.join(", ");
    this.alt = `Cover of ${title} by ${this.artistsString}`;

  };
}
