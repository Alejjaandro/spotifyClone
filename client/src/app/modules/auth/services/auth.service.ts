import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private readonly URL = "https://alejjaandro-spotify-clone-api.vercel.app"
  
  private http = inject(HttpClient)
  private cookie = inject(CookieService)

  sendCredentials(email: string, password: string): Observable<any> {
    const data = {email, password}
    return this.http.post(`${this.URL}/auth/login`, data)
  }
}
