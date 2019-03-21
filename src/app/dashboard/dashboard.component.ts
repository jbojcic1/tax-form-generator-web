import { Component, OnInit } from '@angular/core';
import { GenerateFormService } from '../generate-form/generate-form.service';
import { DividendJOPPD, SalaryJOPPD } from '../generate-form/generate-form';

// const elementData: DashboardElements[] = [{dateGenerated: '1.1.2019.', formType: 'SALARY JOPPD', amount: 5000},
//   {dateGenerated: '1.2.2019.', formType: 'SALARY JOPPD', amount: 5000},
//   {dateGenerated: '1.3.2019.', formType: 'DIVIDEND JOPPD', amount: 20000}];

@Component({
  selector: 'tfg-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[];
  service: (SalaryJOPPD | DividendJOPPD)[];
  dataSource: (SalaryJOPPD | DividendJOPPD)[];

  constructor( private generateFormService: GenerateFormService) {
    this.service = this.generateFormService.getForms();
  }

  ngOnInit() {
    this.displayedColumns = ['dateGenerated', 'formType', 'amount'];
    /// this.dataSource = [{ dateGenerated: this.dateGenerated, formType: this.formType, amount: this.amount }];
    this.dataSource = this.service;
  }
}
