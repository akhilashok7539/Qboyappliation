import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapagmdragPage } from './mapagmdrag.page';

const routes: Routes = [
  {
    path: '',
    component: MapagmdragPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapagmdragPageRoutingModule {}
