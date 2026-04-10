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

  const adminEmail = 'admin@gmail.com';
  const adminPass = 'admin12345';

  const storedUser = this.authService.getUser();

  if (email === adminEmail && password === adminPass) {
    // ✅ SAVE ADMIN FIRST
    this.authService.saveUser({
      email: adminEmail,
      role: 'admin'
    });

    alert('Access Granted: System Administrator.');
    this.router.navigate(['/homepage']);
  } 
  else if (
    storedUser &&
    email === storedUser.email &&
    password === storedUser.password
  ) {
    alert('Access Granted: Personnel Verified.');
    this.router.navigate(['/homepage']);
  } 
  else {
    alert('Access Denied: Invalid Credentials or Unauthorized Personnel.');
  }
}
}
