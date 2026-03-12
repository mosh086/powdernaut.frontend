import { Routes } from '@angular/router';
import { AuthGuard } from '@core/auth/pages/auth-guard';
import { AuthLayoutComponent } from '@layouts/auth-layout/auth-layout.component';
import { LayoutComponent } from '@layouts/layout/layout.component';

export const routes: Routes = [
  { path: '', component: LayoutComponent, canActivate: [AuthGuard] },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./modules/authentication/authentication-module').then(m => m.AuthenticationModule),
  }
];
    