import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerateFormRoutingModule } from './generate-form-routing.module';
import { GenerateFormComponent } from './generate-form.component';

@NgModule({
  declarations: [GenerateFormComponent],
  imports: [
    CommonModule,
    GenerateFormRoutingModule
  ]
})
export class GenerateFormModule { }
