import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration.component';
import { MatButtonModule } from '@angular/material';

const routes: Routes = [
  { path: 'register', component: RegistrationComponent, data: { withoutHeader: true } }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, MatButtonModule]
})
export class AccountRoutingModule { }
