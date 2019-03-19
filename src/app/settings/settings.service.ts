import { Injectable } from '@angular/core';
import { Settings } from './settings';

@Injectable ({
  providedIn: 'root'
})
export class SettingsService {
  private settings: Settings = {
    personal: {
      personalOib: 11111111111,
      streetName: 'Bojcici',
      streetNumber: '16',
      postcode: '22322',
      city: 'Ruzic'
    },
    city: {
      cityName: 'Ruzic',
      cityIban: '1',
      cityCode: '2',
      surtax: 0.2
    },
    company: {
      companyOib: 11111111111,
      companyEmail: 'mia@gmail.com',
      companyName: 'Laplacian',
      companyStreet: 'Ruzic',
      companyCity: 'Ruzic'
    },
    salary: {
      amount: 2,
      currency: 'hrk',
      nonTaxableAmount: 3,
      salaryTax: 2,
      healthInsuranceContribution: 1,
      workSafetyContribution: 3,
      employmentContribution: 2,
      pensionPillar1Contribution: 2,
      pensionPillar2Contribution: 3
    },
    dividend: {
      dividendTax: 3
    }
  };

  saveSettingsInfo(settingsToSave: Settings) {
    this.settings = settingsToSave;
  }

  getSettingsInfo(): Settings {
    return this.settings;
  }
}

