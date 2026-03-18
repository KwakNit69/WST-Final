import { Routes } from '@angular/router';
import { Landing } from './components/landing/landing';
import { LoginComponent } from '../login/login.component';
import { HomepageComponent } from './components/homepage/homepage';
import { ListComponent } from './components/list/list';
import { Biography } from './components/biography/biography';
import { AboutComponent } from './components/about/about';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'list', component: ListComponent },
  { path: 'biography/:id', component: Biography },
  { path: 'about', component: AboutComponent }
];