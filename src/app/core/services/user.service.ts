import { Injectable } from '@angular/core';
import { User } from 'src/app/auth/shared/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  saveUser(data: User) {
    return localStorage.setItem('user', JSON.stringify(data));
  }

  getUser() {
    const user: User = JSON.parse(localStorage.getItem('user') as string);

    return user;
  }
}
