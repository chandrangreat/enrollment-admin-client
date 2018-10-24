import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {AppConfig} from './configs/app.config';

const routes: Routes = [
  // TODO
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  { path: AppConfig.routes.admin, loadChildren: './modules/admin/admin.module#AdminModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
