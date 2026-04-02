import { CommonModule } from '@angular/common';
import { afterNextRender, Component, Injector, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../data.service';
import { ChangeDetectorRef } from '@angular/core'; // 1. Add this import

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

constructor(
  private dataService: DataService,
  private cdr: ChangeDetectorRef 
) {}

ngOnInit() {
  this.dataService.getStats().subscribe({
    next: (res) => {
      // setTimeout(..., 0) pushes this to the next 'tick', satisfying Angular
      setTimeout(() => {
        this.stats = res;
        this.cdr.detectChanges();
      }, 0);
    },
    error: (err) => {
      console.log("CORS/429 Error. Using Archive Fallback.");
      setTimeout(() => {
        this.stats = { 
          total: 117724471, 
          voters: 74166416 
        };
        this.cdr.detectChanges();
      }, 0);
    }
  });
}
}