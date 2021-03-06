import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUserNewAddressPage } from './add-user-new-address.page';

const routes: Routes = [
  {
    path: '',
    component: AddUserNewAddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddUserNewAddressPageRoutingModule {}
