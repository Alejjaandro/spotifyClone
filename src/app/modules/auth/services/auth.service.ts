import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private readonly URL = "http://localhost:8000/api/1.0"
  
  private http = inject(HttpClient)
  private cookie = inject(CookieService)

  sendCredentials(email: string, password: string): Observable<any> {
    const data = {email, password}
    return this.http.post(`${this.URL}/auth/login`, data)
  }
}
