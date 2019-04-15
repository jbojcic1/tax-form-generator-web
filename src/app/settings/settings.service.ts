import { Injectable } from '@angular/core';
import { Settings } from './settings';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable ({
  providedIn: 'root'
})
export class SettingsService {
  constructor(private http: HttpClient) {

  }

  saveSettingsInfo(settingsToSave: Settings): Observable<void> {
    return this.http.post<void>('http://localhost:5000/api/settings', settingsToSave);
  }
  getSettingsInfo(): Observable<Settings> {
    return this.http.get<Settings>('http://localhost:5000/api/settings');
  }


}

