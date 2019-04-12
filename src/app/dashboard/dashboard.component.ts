import { Component, OnInit } from '@angular/core';
import { GenerateFormService } from '../generate-form/generate-form.service';
import { Form } from '../generate-form/generate-form';


@Component({
  selector: 'tfg-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[];
  forms: Form[];

  constructor( private generateFormService: GenerateFormService) {
  }

  ngOnInit() {
    this.displayedColumns = ['dateGenerated', 'formType', 'amount'];
    this.generateFormService.getForms().subscribe(
      x => {
        this.forms = x;
      }
    );
  }
}
