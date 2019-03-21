import { Injectable } from '@angular/core';
import { TaxForm } from './generate-form';

@Injectable ({
  providedIn: 'root'
})
export class  GenerateFormService {
  private forms: TaxForm[] = [];

  saveForm(formToSave: TaxForm) {
    this.forms.push(formToSave);
  }
  getForms(): TaxForm[] {
    return this.forms;
  }
}
