import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.users$ = this.usersService.fetchUsers();
  }

}
