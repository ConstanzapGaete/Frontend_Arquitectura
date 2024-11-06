import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlvidacontrasePage } from './olvidacontrase.page';

const routes: Routes = [
  {
    path: '',
    component: OlvidacontrasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlvidacontrasePageRoutingModule {}
