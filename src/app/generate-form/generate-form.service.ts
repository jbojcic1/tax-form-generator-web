import { Injectable } from '@angular/core';
import { DividendJOPPD, SalaryJOPPD } from './generate-form';

@Injectable ({
  providedIn: 'root'
})
export class  GenerateFormService {
  private forms: (SalaryJOPPD | DividendJOPPD)[] = [];

  saveForm(formToSave: SalaryJOPPD | DividendJOPPD) {
    this.forms.push(formToSave);
  }
  getForms(): (SalaryJOPPD | DividendJOPPD)[] {
    return this.forms;
  }
}
