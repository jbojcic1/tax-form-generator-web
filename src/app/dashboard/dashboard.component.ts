import { Component, OnInit } from '@angular/core';
import { GenerateFormService } from '../generate-form/generate-form.service';
import { TaxForm } from '../generate-form/generate-form';


@Component({
  selector: 'tfg-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[];
  service: TaxForm[];
  dataSource: TaxForm[];

  constructor( private generateFormService: GenerateFormService) {
    this.service = this.generateFormService.getForms();
  }

  ngOnInit() {
    this.displayedColumns = ['dateGenerated', 'formType', 'amount'];
    this.dataSource = this.service;
  }
}
