import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerateFormRoutingModule } from './generate-form-routing.module';
import { GenerateFormComponent } from './generate-form.component';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GenerateFormComponent],
  imports: [
    CommonModule,
    GenerateFormRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class GenerateFormModule { }
