import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as UserActions from '../shared/users.action';
import * as userReducer from '../shared/users.reducer';
import { UsersService } from './users.service';

@Injectable()
export class UsersFacade {
  state$ = this.store.pipe(select(userReducer.getState));

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

  updateUserName(id: number, name: string) {
    this.store.dispatch(new UserActions.StartFetchUsers());
    this.usersService.updateUser({ id, name })
    .subscribe(
      () => this.store.dispatch(new UserActions.UpdateUserName({ user: { id, name } })),
      error => this.store.dispatch(new UserActions.Error({ error })),
      () => this.store.dispatch(new UserActions.FinishFetchUsers())
    );
  }
}
