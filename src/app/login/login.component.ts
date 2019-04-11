import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from './login';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'tfg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showErrorMessage = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(value: Credentials) {
    this.authService.login(value).subscribe(
      () => {
        this.router.navigateByUrl('/dashboard');
      },
      () => {
        this.showErrorMessage = true;
      }
    );
  }

}
