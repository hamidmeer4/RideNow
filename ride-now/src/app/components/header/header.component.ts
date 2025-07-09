import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
    isLoggedIn = false; 
    userName = 'Hamid'; 
    userAvatar = 'https://i.pravatar.cc/150?img=3'; // Replace with user avatar URL or default image

  logout() {
    console.log('User logged out');
    this.isLoggedIn = false; 
  }
}

