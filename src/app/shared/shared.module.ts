import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './modules/material.module';
// import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    // FlexLayoutModule
  ],
  declarations: [HeaderComponent],
  exports: [
    MaterialModule,
    // FlexLayoutModule,
    HeaderComponent
  ]
})
export class SharedModule { }
