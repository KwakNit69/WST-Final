import { Router, Routes } from '@angular/router';
import { inject } from '@angular/core'; // FIXED IMPORT
import { Landing } from './components/landing/landing';
import { LoginComponent } from '../login/login.component';
import { HomepageComponent } from './components/homepage/homepage';
import { ListComponent } from './components/list/list';
import { Biography } from './components/biography/biography';
import { AboutComponent } from './components/about/about';
import { RegisterComponent } from './components/registration/registration';
import { AuthService } from './services/auth';
import { ProfileComponent } from './components/profile/profile';
import { DigitalArchiveComponent } from './components/digital-archive/digital-archive';
import { Timeline } from './components/timeline/timeline';

// Functional Guard
const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // 1. If we are on the Server, let it pass (The Browser will re-check)
  if (typeof window === 'undefined') {
    return true; 
  }

  // 2. If we are on the Browser, check the real data
  const user = authService.getUser();
  console.log('Guard checking user status:', user);

  if (user) {
    return true; 
  } else {
    alert('Access Denied: Please sign in to view the Archive.');
    return router.parseUrl('/login');
  }
};

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'list', component: ListComponent },
  { path: 'biography/:id', component: Biography },
  { path: 'digital-archive', component: DigitalArchiveComponent },
  { path: 'timeline', component: Timeline },
  { path: 'profile', component: ProfileComponent },


  
  // PROTECTED ROUTES
  { path: 'homepage', component: HomepageComponent, canActivate: [authGuard] },
  
  // Fallback
  { path: '**', redirectTo: '' }
];