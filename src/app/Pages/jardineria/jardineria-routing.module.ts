import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JardineriaPage } from './jardineria.page';

const routes: Routes = [
  {
    path: '',
    component: JardineriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JardineriaPageRoutingModule {}
