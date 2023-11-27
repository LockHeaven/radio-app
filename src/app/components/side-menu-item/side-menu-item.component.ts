import { Component, Input } from '@angular/core';
import { TimeIconComponent } from '../../icons/time-icon/time-icon.component';
import { SearchIconComponent } from '../../icons/search-icon/search-icon.component';
import { LibraryIconComponent } from '../../icons/library-icon/library-icon.component';
import { HomeIconComponent } from '../../icons/home-icon/home-icon.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'side-menu-item',
    templateUrl: './side-menu-item.component.html',
    styles: ``,
    standalone: true,
    imports: [RouterLink, HomeIconComponent, LibraryIconComponent, SearchIconComponent, TimeIconComponent]
})
export class SideMenuItemComponent {
  @Input() title = '';
  @Input() icon = '';
}
