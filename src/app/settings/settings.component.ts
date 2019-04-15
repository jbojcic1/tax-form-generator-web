import { Component, OnInit } from '@angular/core';
import {
  CitySettings,
  CompanySettings,
  DividendSettings,
  PersonalSettings,
  SalarySettings,
  Settings
} from './settings';
import { SettingsService } from './settings.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'tfg-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})


export class SettingsComponent implements OnInit {
  settings: Settings;

  constructor(private settingsService: SettingsService, private snackBar: MatSnackBar) {
  }
  ngOnInit() {
    this.settingsService.getSettingsInfo().subscribe(
        settingsInfo => {
          this.settings = settingsInfo;
        });
  }

  onSubmit(value: Settings) {
    this.settingsService.saveSettingsInfo(value).subscribe(() => {
      this.snackBar.open('Saved successfully.', null, { duration: 3000 });
    },
      () => {
        this.snackBar.open('Error. Failed to save settings.', null, { duration: 3000 });
      }
    );
  }
}
