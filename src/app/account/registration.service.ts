import { Injectable } from '@angular/core';
import { User } from './registration';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable ({
  providedIn: 'root'
})

export class RegistrationService {

  constructor(private http: HttpClient) {
  }


  saveUser(userToSave: User): Observable<void> {
    return this.http.post<void>('http://localhost:5000/api/accounts', userToSave);
  }


}
