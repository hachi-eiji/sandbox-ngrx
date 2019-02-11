import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import * as UserActions from '../shared/users.action';
import * as userReducer from '../shared/users.reducer';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]> | null = null;
  loading$: Observable<boolean> | null = null;

  constructor(
    private usersService: UsersService,
    private store: Store<userReducer.State>
  ) {
    this.loading$ = this.store.pipe(select(userReducer.getLoading));
    this.users$ = this.store.pipe(select(userReducer.getUsers));
  }

  ngOnInit() {
  }

  fetchUser() {
    this.store.dispatch(new UserActions.StartFetchUsers());
  }
}
