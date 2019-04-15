import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SettingsService } from '../settings/settings.service';
import { Settings } from '../settings/settings';
import { GenerateFormService } from './generate-form.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Form } from './generate-form';

@Component({
  selector: 'tfg-generate-form',
  templateUrl: './generate-form.component.html',
  styleUrls: ['./generate-form.component.scss']
})
export class GenerateFormComponent implements OnInit {
  date = new FormControl(new Date());
  service: Settings;
  amount: number;
  currency: string;

  constructor(
    private settingsService: SettingsService,
    private generateFormService: GenerateFormService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onSubmit(value: Form) {
    this.generateFormService.generateForm(value).subscribe(
      () => {
        this.snackBar.open('Saved successfully.', null, { duration: 3000 });
        this.router.navigateByUrl('/dashboard');
      },
      () => this.snackBar.open('Error. Failed to generate form.', null, { duration: 3000 })
    );
  }
}
