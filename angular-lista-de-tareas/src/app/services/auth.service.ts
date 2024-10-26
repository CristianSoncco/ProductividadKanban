// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth/login';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<string> {
    return this.http.post<{ token: string }>(this.apiUrl, { email, password }).pipe(
      map(response => response.token), // Mapea la respuesta y obtiene el token
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocurrió un error';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else if (error.status === 401) {
      errorMessage = 'Credenciales incorrectas';
    }
    return throwError(errorMessage);
  }
}
