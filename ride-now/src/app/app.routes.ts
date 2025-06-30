import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BookingComponent } from './components/booking/booking.component';
import { RideHistoryComponent } from './components/ride-history/ride-history.component';
import { DriverDashboardComponent } from './components/driver-dashboard/driver-dashboard.component';

export const routes: Routes = [
     { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: 'book-ride',
    component: BookingComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'ride-history',
    component: RideHistoryComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'driver-dashboard',
    component: DriverDashboardComponent,
    // canActivate: [AuthGuard]
  },

  { path: '**', redirectTo: 'login' },
];
