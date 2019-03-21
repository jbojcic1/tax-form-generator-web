import { Injectable } from '@angular/core';
import { User } from './registration';

@Injectable ({
  providedIn: 'root'
})

export class RegistrationService {
  private users: User[] = [];

  saveUser(userToSave: User) {
    this.users.push(userToSave);
  }
  getUsers(): User[] {
    return this.users;
  }
}
