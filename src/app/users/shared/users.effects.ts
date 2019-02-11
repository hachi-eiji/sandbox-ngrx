import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { UsersService } from './users.service';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private service: UsersService
  ) {
  }
}
