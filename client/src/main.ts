import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { authInterceptor } from '@core/interceptors/inject-token.interceptor';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { provideRouter } from '@angular/router';


bootstrapApplication(AppComponent, {
    // We only import other modules
    providers: [
        provideRouter(appRoutes),
        importProvidersFrom(BrowserModule),
        CookieService,
        provideHttpClient(withInterceptors([authInterceptor]))
    ]
})
  .catch(err => console.error(err));
