import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { InjectTokenInterceptor } from '@core/interceptors/inject-token.interceptor';
import { HTTP_INTERCEPTORS, withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { provideRouter } from '@angular/router';


bootstrapApplication(AppComponent, {
    // We only import other modules
    providers: [
        provideRouter(appRoutes),
        importProvidersFrom(BrowserModule),
        CookieService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InjectTokenInterceptor,
            multi: true
        },
        provideHttpClient(withInterceptorsFromDi())
    ]
})
  .catch(err => console.error(err));
