// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  loginSuccess: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.email, this.password).subscribe({
      next: (token) => {
        localStorage.setItem('token', token);
        this.loginSuccess = true;
        this.router.navigate(['/dashboard']); // Redirige al componente ideal en caso de éxito
      },
      error: (err) => {
        this.errorMessage = err;
        this.loginSuccess = false;
      }
    });
  }
}
