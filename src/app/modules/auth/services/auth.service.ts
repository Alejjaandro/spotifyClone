import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private readonly URL = "http://localhost:8000/api/1.0"

  constructor(private http:HttpClient, private cookie: CookieService) { }

  sendCredentials(email: string, password: string): Observable<any> {
    const data = {email, password}
    return this.http.post(`${this.URL}/auth/login`, data)
  }
}
