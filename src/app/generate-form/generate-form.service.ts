import { Injectable } from '@angular/core';
import { Form } from './generate-form';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable ({
  providedIn: 'root'
})
export class  GenerateFormService {

  constructor(private http: HttpClient) {}

  // saveForm(formToSave: Form) {
  //   this.forms.push(formToSave);
  // }
  getForms(): Observable<Form[]> {
    return this.http.get<Form[]>('http://localhost:5000/api/forms');
  }
}
