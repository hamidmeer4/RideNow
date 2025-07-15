import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BookingComponent } from './components/booking/booking.component';
import { RideHistoryComponent } from './components/ride-history/ride-history.component';
import { DriverDashboardComponent } from './components/driver-dashboard/driver-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DriverComponent } from './components/driver/driver.component';
import { RidersComponent } from './components/riders/riders.component';

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
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'driver',
    component: DriverComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'riders',
    component: RidersComponent,
    // canActivate: [AuthGuard]
  },


  { path: '**', redirectTo: 'login' },
];
