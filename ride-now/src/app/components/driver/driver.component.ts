import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-driver',
  standalone: true,
  imports: [
     CommonModule,
    FormsModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatProgressBarModule,
  ],
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.scss'
})
export class DriverComponent {
  isOnline = true;
  todayEarnings = 75;
  weeklyEarnings = 420;
  totalRides = 112;
  activeHours = 24;
  targetHours = 40;
  notifications = [
    'System Update: New payout method added.',
    'Ride Cancelled: Jul 1, 2:00 PM',
    'Reminder: Vehicle inspection due next week.'
  ];
  toggleStatus() {
    this.isOnline = !this.isOnline;
  }
}
