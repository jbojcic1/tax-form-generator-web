import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from './login';
import { AuthService } from '../core/auth.service';


@Component({
  selector: 'tfg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentialsCorrect = true;

  constructor(private router: Router, private loginService: AuthService) { }

  ngOnInit() {
  }
  onSubmit(value: LoginUser) {
    this.credentialsCorrect = this.loginService.login(value);

    if (this.credentialsCorrect) {
      this.router.navigateByUrl('/dashboard');
    }
  }

}
