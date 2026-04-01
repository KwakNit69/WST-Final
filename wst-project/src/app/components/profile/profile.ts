import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class ProfileComponent implements OnInit {
  currentUser: any = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.currentUser = this.authService.getUser();
    
    if (!this.currentUser) {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.router.navigate(['/login']);
  }
}