import { Injectable } from '@angular/core';
import { Form } from './generate-form';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable ({
  providedIn: 'root'
})
export class  GenerateFormService {

  constructor(private http: HttpClient) {}

  getForms(): Observable<Form[]> {
    return this.http.get<Form[]>(`${environment.backendUrl}/api/forms`);
  }

  generateForm(value: Form): Observable<void> {
    return this.http.post<void>(`${environment.backendUrl}/api/forms/${value.formType}`, value);
  }
}
