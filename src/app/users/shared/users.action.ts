import { Action } from '@ngrx/store';
import { User } from '../../models/user';

export enum UsersActionTypes {
  StartFetchUsers = '[Users] Start Fetch Users'
}

export class StartFetchUsers implements Action {
  readonly type = UsersActionTypes.StartFetchUsers;

  constructor(payload: User[]) {
  }
}

export type UsersActions =
  StartFetchUsers
  ;
