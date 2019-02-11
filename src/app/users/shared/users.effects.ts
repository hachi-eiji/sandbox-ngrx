import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import * as UserActions from './users.action';
import { UsersService } from './users.service';

@Injectable()
export class UsersEffects {
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
