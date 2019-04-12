import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { catchError, switchMap } from 'rxjs/operators';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newRequest = this.buildRequest(request);

    return next.handle(newRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        return this.shouldRefreshToken(error)
          ? this.auth.refreshToken().pipe(
            catchError(() => {
              this.auth.logout();
              return throwError(error);
            }),
            switchMap(() => next.handle(this.buildRequest(request)))
          )
          : throwError(error);
      })
    );
  }

  private buildRequest(request: HttpRequest<any>): HttpRequest<any> {
    const accessToken = this.auth.getAccessToken();

    return !accessToken
      ? request
      : request.clone({
        headers: new HttpHeaders(
          { Authorization: `Bearer ${accessToken}` }
        )
      });
  }

  private shouldRefreshToken(error: HttpErrorResponse): boolean {
    return error.status === 401
      && error.headers.get('WWW-Authenticate').includes('The token is expired');
  }

}
