import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JardineriaPageRoutingModule } from './jardineria-routing.module';

import { JardineriaPage } from './jardineria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JardineriaPageRoutingModule
  ],
  declarations: [JardineriaPage]
})
export class JardineriaPageModule {}
