import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as UserActions from '../shared/users.action';
import * as userReducer from '../shared/users.reducer';
import { UsersService } from './users.service';

@Injectable()
export class UsersFacade {
  loading$ = this.store.pipe(select(userReducer.getLoading));
  users$ = this.store.pipe(select(userReducer.getUsers));
  error$ = this.store.pipe(select(userReducer.error));

  constructor(
    private store: Store<userReducer.State>,
    private usersService: UsersService) {
  }

  fetchUser() {
    this.store.dispatch(new UserActions.StartFetchUsers());
    this.usersService.fetchUsers()
    .subscribe(
      users => this.store.dispatch(new UserActions.SuccessFetchUser({ users })),
      error => this.store.dispatch(new UserActions.Error({ error })),
      () => this.store.dispatch(new UserActions.FinishFetchUsers())
    );
  }
}
