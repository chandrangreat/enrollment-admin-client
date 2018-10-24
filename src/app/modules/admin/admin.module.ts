import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MatFileUploadModule } from 'angular-material-fileupload';

import { FileUploadComponent } from './components/file-upload/file-upload.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatFileUploadModule
  ],
  declarations: [FileUploadComponent]
})
export class AdminModule { }
