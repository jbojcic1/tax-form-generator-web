import { Injectable } from '@angular/core';
import { User } from './registration';

@Injectable ({
  providedIn: 'root'
})

export class RegistrationService {
  private users: User[] = [
    {
      email: 'mbojcic@gmail.com',
      firstName: 'Mia',
      lastName: 'Bojcic',
      password: '123456'
    }
  ];

  saveUser(userToSave: User) {
    this.users.push(userToSave);
  }
  getUsers(): User[] {
    return this.users;
  }
}
