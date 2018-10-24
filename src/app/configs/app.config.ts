import { InjectionToken } from '@angular/core';
import { environment } from '../../environments/environment';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: any = {
  routes: {
    admin: 'admin'
  },
  endpoints: {
    fileUpload: environment.fileUploadLink
  } // Can put server endpoints here
};

