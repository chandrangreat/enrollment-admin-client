import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

const adminRoutes: Routes = [
//  TODO
  { path: '', component: FileUploadComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
