import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerateFormRoutingModule } from './generate-form-routing.module';
import { GenerateFormComponent } from './generate-form.component';
import { MatFormFieldModule, MatSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GenerateFormComponent],
  imports: [
    CommonModule,
    GenerateFormRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule
  ]
})
export class GenerateFormModule { }
