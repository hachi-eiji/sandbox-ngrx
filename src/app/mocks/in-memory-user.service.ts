import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryUserService implements InMemoryDbService {
  constructor() {
  }

  private static getUsers(): User[] {
    return [
      { id: 1, name: 'mike' },
      { id: 2, name: 'bob' },
      { id: 3, name: 'taro' },
      { id: 3, name: 'joe' },
    ];
  }

  createDb() {
    return {
      users: InMemoryUserService.getUsers()
    };
  }

}
