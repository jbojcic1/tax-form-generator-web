import { Component, OnInit } from '@angular/core';
import { Settings } from './settings';
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
    this.settings = this.settingsService.getSettingsInfo();
  }

  onSubmit(value: Settings) {
    this.settingsService.saveSettingsInfo(value);
    this.snackBar.open('Saved successfully.', null, { duration: 3000 });
  }
}
