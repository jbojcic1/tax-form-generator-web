import { Injectable } from '@angular/core';
import { UserRegistration } from './registration';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable ({
  providedIn: 'root'
})

export class RegistrationService {

  constructor(private http: HttpClient) {
  }


  saveUser(userToSave: UserRegistration): Observable<void> {
    return this.http.post<void>(`${environment.backendUrl}/api/accounts`, userToSave);
  }


}
