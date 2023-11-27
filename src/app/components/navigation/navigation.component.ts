import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NextPageIconComponent } from '../../icons/next-page-icon/next-page-icon.component';
import { PreviousPageIconComponent } from '../../icons/previous-page-icon/previous-page-icon.component';

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styles: ``,
    standalone: true,
    imports: [PreviousPageIconComponent, NextPageIconComponent]
})
export class NavigationComponent {

  location = inject(Location);

  goBack(): void {
    this.location.back();
  }

  goFoward(): void {
    this.location.forward();
  }

}
