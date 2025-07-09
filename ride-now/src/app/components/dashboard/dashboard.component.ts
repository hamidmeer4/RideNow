import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DropdownModule } from 'primeng/dropdown';
import { ChartModule } from 'primeng/chart';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatSelectModule,
    ChartModule,
    DropdownModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

weekOptions = [
  { label: 'This Week', value: 'thisWeek' },
  { label: 'Last Week', value: 'lastWeek' },
  { label: '2 Weeks Ago', value: 'twoWeeksAgo' },
  { label: 'This Month', value: 'thisMonth' }
];

  selectedWeek = 'week';

  earningsData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: '$',
        backgroundColor: '#0d9488',
        data: [125, 75, 50, 40, 60, 30, 25],
      },
    ],
  };

  earningsOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

events = [
  {
    day: '27',
    month: 'OCT',
    title: 'First Anniversary',
    subtitle: 'John David',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    day: '30',
    month: 'OCT',
    title: 'Route Additions',
    subtitle: 'By Rees Company',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
  },
  {
    day: '30',
    month: 'OCT',
    title: 'Route Additions',
    subtitle: 'By Rees Company',
    avatar: 'https://randomuser.me/api/portraits/men/52.jpg'
  },
  {
    day: '30',
    month: 'OCT',
    title: 'Route Additions',
    subtitle: 'By Rees Company',
    avatar: 'https://randomuser.me/api/portraits/men/81.jpg'
  },
  {
    day: '03',
    month: 'MAY',
    title: 'Route Additions',
    subtitle: 'By Merik Company',
    avatar: 'https://randomuser.me/api/portraits/men/54.jpg'
  },
];

 tasks = [
    {
    name: 'Ali Khan',
    dropTime: '09:15 AM',
    progress: 70,
    vehicle: 'bike',
    avatarUrl:'https://randomuser.me/api/portraits/men/54.jpg',
    position: { top: '70px', left: '6%' }
  },
    {
    name: 'Joshii Bring',
    dropTime: '10:00 AM',
    progress: 50,
    vehicle: 'bike',
    avatarUrl:'https://randomuser.me/api/portraits/women/14.jpg',
    position: { top: '290px', left: '8%' }
  },
    {
    name: 'Joshii Parkar',
    dropTime: '12:00PM',
    progress: 30,
    vehicle: 'car',
    avatarUrl:'https://randomuser.me/api/portraits/men/54.jpg',
    position: { top: '160px', left: '28%' }
  },
    {
    name: 'Joshii Bring',
    dropTime: '12:30 PM',
    progress: 80,
    vehicle: 'bike',
    avatarUrl:'https://randomuser.me/api/portraits/men/84.jpg',
    position: { top: '360px', left: '32%' }
  },
    {
    name: 'Tina Bring',
    dropTime: '02:45 PM',
    progress: 20,
    vehicle: 'car',
    avatarUrl:'https://randomuser.me/api/portraits/women/88.jpg',
    position: { top: '170px', left: '50%' }
  },
    {
    name: 'Tuna boA',
    dropTime: '06:00 PM',
    progress: 80,
    vehicle: 'bike',
    avatarUrl:'https://randomuser.me/api/portraits/men/48.jpg',
    position: { top: '80px', left: '78%' }
  },
    {
    name: 'Saif',
    dropTime: '06:00 PM',
    progress: 60,
    vehicle: 'bike',
    avatarUrl:'https://randomuser.me/api/portraits/men/18.jpg',
    position: { top: '300px', left: '78%' }
  },
    {
    name: 'Ayaz',
    dropTime: '06:00 PM',
    progress: 90,
    vehicle: 'bike',
    avatarUrl:'https://randomuser.me/api/portraits/men/68.jpg',
    position: { top: '380px', left: '61%' }
  },

  ];



}
