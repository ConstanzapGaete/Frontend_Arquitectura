import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthenPageRoutingModule } from './authen-routing.module';

import { AuthenPage } from './authen.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthenPageRoutingModule,
    SharedModule
  ],
  declarations: [AuthenPage]
})
export class AuthenPageModule {}
