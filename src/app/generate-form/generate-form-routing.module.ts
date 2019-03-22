import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerateFormComponent } from './generate-form.component';
import { AuthGuard } from '../core/auth.guard';

const routes: Routes = [
  { path: 'generate-form', component: GenerateFormComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerateFormRoutingModule { }
