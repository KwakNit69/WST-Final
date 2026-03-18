import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css' // Your specific CSS path
})
export class LoginComponent {
  username = '';
  password = '';
  errorMsg = '';
  constructor(private router: Router) {}

onLogin() {
  if (this.username === 'ADMIN' && this.password === 'ADMIN') {
    alert('Login Successful!');
    this.router.navigate(['/home']);
  } else {
    this.errorMsg = 'Access Denied: Invalid Credentials';
  }
}
}