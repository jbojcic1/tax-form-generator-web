import { Injectable } from '@angular/core';
import { LoginUser } from '../login/login';
import { RegistrationService } from '../account/registration.service';
import { User } from '../account/registration';

@Injectable ({
  providedIn: 'root'
})
export class AuthService {
  get isLoggedIn() {
    return !!this.loggedInUser;
  }

  private loggedInUser: User | undefined;

  constructor(private registrationService: RegistrationService) {
  }

  login(currentUser: LoginUser) {

    // const user = this.registrationService.getUsers()
    //   .find(x => x.email === currentUser.email && x.password === currentUser.password);
    //
    // if (user) {
    //   this.loggedInUser = user;
    // }
    //
    // return !!user;
    return true;
  }
}
