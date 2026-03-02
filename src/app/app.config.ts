import { 
  ApplicationConfig, 
  provideBrowserGlobalErrorListeners, 
  provideZonelessChangeDetection,
  importProvidersFrom,
  isDevMode,
  provideZoneChangeDetection
} from '@angular/core';
  
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { rootReducer } from '@/store';
import { localStorageSyncReducer } from '@/store/layout/layout-reducers';
import { CalendarEffects } from '@/store/calendar/calendar.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools'
import { provideEffects } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationEffects } from '@/store/authentication/authentication.effects';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withFetch,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { JwtInterceptor } from '@core/helper/jwt.interceptor';
import { ErrorInterceptor } from '@core/helper/error.interceptor';
import { BrowserModule } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideStore(rootReducer, { metaReducers: [localStorageSyncReducer] }),
    importProvidersFrom(BrowserAnimationsModule, BrowserModule),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(AuthenticationEffects, CalendarEffects),
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
  ]
};
