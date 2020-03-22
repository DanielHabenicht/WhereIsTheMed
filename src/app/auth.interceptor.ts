import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthGuardService } from './auth-guard.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authGuardService: AuthGuardService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authGuardService.getToken()}`
      }
    });
    return next.handle(request);
  }
}
