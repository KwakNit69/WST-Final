import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './registration.html',
  styleUrl: './registration.css'
})
export class RegisterComponent {
  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    department: new FormControl('National Archives', [Validators.required]),
    idNumber: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  // 2. Inject AuthService here
  constructor(private router: Router, private authService: AuthService) {}

onSubmit() {
  if (this.registerForm.valid) {
    // Save to AuthService (which saves to LocalStorage)
    this.authService.saveUser(this.registerForm.value);
    
    alert('Enrollment Successful. You may now sign in with your access key.');
    this.router.navigate(['/login']);
  } else {
    alert('Please complete all required fields.');
  }
}
}