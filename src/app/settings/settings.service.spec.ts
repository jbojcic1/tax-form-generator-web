import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SettingsService } from './settings.service';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

describe('SettingsService', () => {
  let service: SettingsService;
  let httpTestingController: HttpTestingController;

  const settings = {
    personal: {
      personalOib: '123456789',
      streetName: 'Bojcici',
      streetNumber: '16',
      postcode: '22322',
      city: 'Ruzic'
    },
    city: {
      cityName: 'Ruzic',
      cityIban: 'HR12000343489032053',
      cityCode: '543434',
      surtax: 0.05
    },
    company: {
      companyOib: '2389578394983',
      companyEmail: 'fdla@fadsk.com',
      companyName: 'Kramerica Industries LLC',
      companyStreet: 'Fifth Avenue 6',
      companyCity: 'New York'
    },
    salary: {
      amount: 500,
      currency: 'EUR',
      nonTaxableAmount: 3800,
      salaryTax: 0.2,
      healthInsuranceContribution: 0,
      workSafetyContribution: 0,
      employmentContribution: 0,
      pensionPillar1Contribution: 0,
      pensionPillar2Contribution: 0
    },
    dividend: {
      dividendTax: 0.12
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SettingsService]
    });

    service = TestBed.get(SettingsService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  describe('#saveSettingsInfo', () => {
    it('should trigger POST request to corresponding api with correct data', () => {
      service.saveSettingsInfo(settings).subscribe(res => {
        expect(res).toBe(null);
      });

      const req = httpTestingController.expectOne(`${environment.backendUrl}/api/settings`);

      expect(req.request.method).toEqual('POST');
      expect(req.request.body).toEqual(settings);

      req.flush(null);
    });
  });

  describe('#getSettingsInfo', () => {
    it('should trigger GET request to corresponding api and return fetched settings', () => {
      service.getSettingsInfo().subscribe(res => {
        expect(res).toEqual(settings);
      });

      const req = httpTestingController.expectOne(`${environment.backendUrl}/api/settings`);

      expect(req.request.method).toEqual('GET');

      req.flush(settings);
    });
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
