import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterLink], // <--- Import RouterLink for navigation
  templateUrl: './homepage.html',
  styleUrl: './homepage.css' // <--- Make sure this file exists and has your styles
})
export class HomepageComponent {
  
 }
