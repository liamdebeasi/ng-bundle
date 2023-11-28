import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideIonicAngular } from '../ionic-test';

provideIonicAngular({})

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),]
};
