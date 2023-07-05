import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { User } from 'src/app/auth/shared/user.model';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private userService: UserService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const user = this.userService.getUser();

    if (user.accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
    }

    return next.handle(request);
  }
}
