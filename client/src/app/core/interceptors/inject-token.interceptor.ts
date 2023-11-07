import { inject } from '@angular/core';
import {HttpRequest, HttpHandlerFn} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

export const authInterceptor = (request: HttpRequest<unknown>, next: HttpHandlerFn) => {

  const cookieService = inject(CookieService)

  try {
    const token = cookieService.get('token')
    let newRequest = request
    newRequest = request.clone(
      {
        setHeaders: {
          authorization: `Bearer ${token}`
        }
      }
    )

    return next(newRequest)

  } catch (error) {
    console.log('Something went wrong', error)
    return next(request)
  }
}