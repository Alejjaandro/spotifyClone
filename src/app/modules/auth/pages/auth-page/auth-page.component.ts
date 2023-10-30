import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-auth-page',
    templateUrl: './auth-page.component.html',
    styleUrls: ['./auth-page.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule, NgIf]
})
export class AuthPageComponent {

  errorSession: Boolean = false
  formLogin: FormGroup = new FormGroup({});

  constructor(
    private authService: AuthService, 
    private cookie: CookieService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email,
        ]),

        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ])
      }
    )
  }

  sendLogin(): void {
    const {email, password} = this.formLogin.value

    this.authService.sendCredentials(email, password).subscribe(responseOk => {
      console.log("Login succesfull")
      this.cookie.set('token', responseOk.tokenSession, 1, "/")
      this.router.navigate(['/', 'tracks'])
    }, error => {
      this.errorSession = true
      console.log("Wrong email or password")
    })
  }
}
