import { Injectable } from '@angular/core';
import { Credentials } from '../login/login';
import { RegistrationService } from '../account/registration.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from './login-response';
import { tap } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';
import { JwtToken } from './jwt-token';
import { User } from './user';
import { Router } from '@angular/router';
import { RefreshTokenResponse } from './refresh-token-response';
import { environment } from 'src/environments/environment';

@Injectable ({
  providedIn: 'root'
})
export class AuthService {

  get isLoggedIn() {
    return !!this.loggedInUser;
  }

  loggedInUser: User | undefined;

  constructor(private registrationService: RegistrationService, private http: HttpClient, private router: Router) {
    const userString = localStorage.getItem('user');
    if (userString) {
      this.loggedInUser = JSON.parse(userString);
    }
  }

  login(credentials: Credentials): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.backendUrl}/api/auth`, credentials)
      .pipe(
        tap(
          (loginResponse: LoginResponse) => {
            localStorage.setItem('accessToken', loginResponse.accessToken);
            localStorage.setItem('refreshToken', loginResponse.refreshToken);

            const accessToken = localStorage.getItem('accessToken');
            const decodedAccessToken: JwtToken = jwt_decode(accessToken);

            this.loggedInUser = {
              id: +decodedAccessToken.id,
              email: decodedAccessToken.email,
              firstName: decodedAccessToken.firstName,
              lastName: decodedAccessToken.lastName
            };
            localStorage.setItem('user', JSON.stringify(this.loggedInUser));
          }
        )
      );
  }

  logout() {
    localStorage.setItem('accessToken', null);
    localStorage.setItem('refreshToken', null);
    localStorage.setItem('user', null);
    this.loggedInUser = undefined;
    this.router.navigate(['/login']);
  }

  getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  refreshToken(): Observable<RefreshTokenResponse> {
    const data = { refreshToken: localStorage.getItem('refreshToken') };
    return this.http.post<RefreshTokenResponse>(`${environment.backendUrl}/api/auth/refresh`, data)
      .pipe(
        tap(
          (response: RefreshTokenResponse) => {
            localStorage.setItem('accessToken', response.accessToken);
          }
        )
      );
  }

}
