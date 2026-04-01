import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header";
import { FooterComponent } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
})
export class AppComponent {
  showNavAndFooter = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // Add the Landing page path here. 
      // Usually, the landing page is '/' or an empty string.
      const hiddenRoutes = ['/', '/login', '/register', ''];
      
      this.showNavAndFooter = !hiddenRoutes.includes(event.urlAfterRedirects);
    });
  }
}