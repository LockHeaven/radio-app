import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LibraryIconComponent } from 'src/app/icons/library-icon/library-icon.component';

@Component({
  selector: 'side-menu-item',
  standalone: true,
  imports: [CommonModule, RouterLink, LibraryIconComponent],
  templateUrl: './side-menu-item.component.html',
  styles: ``,
})
export class SideMenuItemComponent {
  @Input() title = '';
}
