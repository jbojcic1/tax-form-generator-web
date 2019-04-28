import { Injectable } from '@angular/core';
import { Settings } from './settings';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable ({
  providedIn: 'root'
})
export class SettingsService {
  constructor(private http: HttpClient) {

  }

  saveSettingsInfo(settingsToSave: Settings): Observable<void> {
    return this.http.post<void>(`${environment.backendUrl}/api/settings`, settingsToSave);
  }

  getSettingsInfo(): Observable<Settings> {
    return this.http.get<Settings>(`${environment.backendUrl}/api/settings`);
  }
}

