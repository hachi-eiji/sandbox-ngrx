import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as UserActions from '../shared/users.action';
import * as userReducer from '../shared/users.reducer';

@Injectable()
export class UsersFacade {
  loading$ = this.store.pipe(select(userReducer.getLoading));
  users$ = this.store.pipe(select(userReducer.getUsers));

  constructor(private store: Store<userReducer.State>) {
  }

  fetchUser() {
    this.store.dispatch(new UserActions.StartFetchUsers());
  }
}
