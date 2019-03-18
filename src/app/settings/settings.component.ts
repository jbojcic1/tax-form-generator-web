import { Component, OnInit } from '@angular/core';
import {Settings} from './settings';

@Component({
  selector: 'tfg-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})


export class SettingsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(value: Settings) {
    console.log(value.personal);
  }
}
