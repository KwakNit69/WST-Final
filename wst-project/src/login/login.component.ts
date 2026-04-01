import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../app/services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
 templateUrl: './login.component.html', 
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // 1. Your form must be defined
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private authService: AuthService, private router: Router) {}

  // 2. This name MUST match the (ngSubmit)="onLogin()" in your HTML
onLogin() {
  const { email, password } = this.loginForm.getRawValue();
  
  // 1. Hardcoded Admin Credentials
  const adminEmail = 'admin@institution.gov.ph';
  const adminPass = 'admin12345'; // Changed to 8+ chars to pass validators

  // 2. Get the user you just registered from the service
  const storedUser = this.authService.getUser();

  console.log('Login Attempt:', email);

  // 3. Logic Check: Check Admin FIRST, then check Registered User
  if (email === adminEmail && password === adminPass) {
    alert('Access Granted: System Administrator.');
    this.router.navigate(['/homepage']); // Ensure path matches app.routes.ts
  } 
  else if (storedUser && email === storedUser.email && password === storedUser.password) {
    alert('Access Granted: Personnel Verified.');
    this.router.navigate(['/homepage']);
  } 
  else {
    alert('Access Denied: Invalid Credentials or Unauthorized Personnel.');
  }
}
}