import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ComponentsModule } from '../components/components.module';
import { MainComponent } from './main/main.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PlaylistComponent } from './playlist/playlist.component';



@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        PagesRoutingModule,
        LayoutComponent,
        MainComponent,
        PlaylistComponent
    ]
})
export class PagesModule { }
