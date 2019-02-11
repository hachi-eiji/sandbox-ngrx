import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Injectable()
export class UsersService {
  constructor(private httpClient: HttpClient) {
  }

  static httpHeaders(): HttpHeaders {
    return new HttpHeaders({
      Accept: 'application/json'
    });
  }

  fetchUsers(): Observable<User[]> {
    // return this.httpClient.get<User[]>('/api/error', { headers: UsersService.httpHeaders() });
    return this.httpClient.get<User[]>('/api/users', { headers: UsersService.httpHeaders() });
  }

  updateUser(user: User): Observable<any> {
    return this.httpClient.post(`/api/users/${user.id}`, { name: user.name });
  }
}
