import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { MainComponent } from './main/main.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [CommonModule, ComponentsModule, PagesRoutingModule, MainComponent],
})
export class PagesModule {}
