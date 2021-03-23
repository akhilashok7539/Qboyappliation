import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapagmdragPageRoutingModule } from './mapagmdrag-routing.module';

import { MapagmdragPage } from './mapagmdrag.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapagmdragPageRoutingModule
  ],
  declarations: [MapagmdragPage]
})
export class MapagmdragPageModule {}
