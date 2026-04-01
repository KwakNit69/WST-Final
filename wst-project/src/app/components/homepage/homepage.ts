import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterLink], // <--- Import RouterLink for navigation
  templateUrl: './homepage.html',
  styleUrl: './homepage.css' // <--- Make sure this file exists and has your styles
})
export class HomepageComponent implements OnInit {
  // Initialize with 0 so the loading template shows correctly
  stats = { total: 0, voters: 0 };

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getStats().subscribe({
      next: (res) => this.stats = res,
      error: (err) => {
        console.error('Archive API Error:', err);
        // Fallback data so the site doesn't look broken if the UN API is down
        this.stats = { total: 117724000, voters: 74166000 };
      }
    });
  }
}