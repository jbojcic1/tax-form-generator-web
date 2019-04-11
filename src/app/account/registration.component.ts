import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { RegistrationService } from './registration.service';
import { UserRegistration } from './registration';

@Component({
  selector: 'tfg-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private router: Router,
              private registrationService: RegistrationService) { }

  ngOnInit() {
  }

  onSubmit(value: UserRegistration) {
    this.registrationService.saveUser(value).subscribe(
      () => {
        this.snackBar.open('Registered successfully.', null, { duration: 3000 });
        this.router.navigateByUrl('/login');
      },
      () => {
        this.snackBar.open('Error. Failed to add user.', null, { duration: 3000 });
      }
    );
  }

}
