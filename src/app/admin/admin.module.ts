import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
console.warn('Admin Module');

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
