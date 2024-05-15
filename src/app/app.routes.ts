import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './navigation/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { guestGuard } from './guards/guest.guard';
import { authGuard } from './guards/auth.guard';


export const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [guestGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '' , component: LayoutComponent, children: [
    {path: 'dashboard', component: DashboardComponent, canActivate: [authGuard]  }
  ]}
];
