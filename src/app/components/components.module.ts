import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { IconsModule } from '../icons/icons.module';
import { SideMenuItemComponent } from './side-menu-item/side-menu-item.component';
import { SideMenuCardComponent } from './side-menu-card/side-menu-card.component';
import { PlayerComponent } from './player/player.component';
import { CurrentSongComponent } from './current-song/current-song.component';
import { VolumeControlComponent } from './volume-control/volume-control.component';

const components = [
  AsideMenuComponent,
  SideMenuItemComponent,
  SideMenuCardComponent,
  PlayerComponent,
  CurrentSongComponent,
  VolumeControlComponent,
];

@NgModule({
  imports: [CommonModule, IconsModule, RouterModule, components],
  exports: [components],
})
export class ComponentsModule {}
