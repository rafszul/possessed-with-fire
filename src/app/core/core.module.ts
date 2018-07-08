import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatButtonModule,
  MatToolbarModule,
  MatTabsModule
 } from '@angular/material';

// import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    // CoreRoutingModule
  ],
  declarations: [],
  exports: [
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
  ]
})
export class CoreModule { }
