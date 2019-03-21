import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../account/registration';
import { RegistrationService } from '../account/registration.service';

export interface LoginUser {
  email: string;
  password: string;
}

@Component({
  selector: 'tfg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  registratedUsers: User[] = [];
  credentialsCorrect = true;

  constructor(private router: Router, private service: RegistrationService) { }

  ngOnInit() {
  }
  onSubmit(value: LoginUser) {
    this.registratedUsers = this.service.getUsers();
    const user = this.registratedUsers.find(user => user.email === value.email && user.password === value.password);
    if (user) {
      this.credentialsCorrect = true;
      this.router.navigateByUrl('/dashboard');
    } else {
      this.credentialsCorrect = false;
    }
  }

}
