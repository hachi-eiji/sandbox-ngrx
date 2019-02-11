import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { User } from '../../models/user';
import * as UserActions from './users.action';
import { UsersService } from './users.service';

@Injectable()
export class UsersEffects {
  @Effect()
  users$ = this.actions$.pipe(
    ofType(UserActions.UsersActionTypes.StartFetchUsers),
    switchMap(() => {
      return this.service.fetchUsers().pipe(
        map((users: User[]) => new UserActions.SuccessFetchUser(users))
      );
    })
  );

  @Effect()
  finish$ = this.actions$.pipe(
    ofType(UserActions.UsersActionTypes.SuccessFetchUser),
    map(() => new UserActions.FinishFetchUsers())
  );

  constructor(
    private actions$: Actions,
    private service: UsersService
  ) {
  }
}
