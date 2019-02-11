import { Action } from '@ngrx/store';

export enum UsersActionTypes {
  StartFetchUsers = '[Users] Start Fetch Users',
  FinishFetchUsers = '[Users] Finish Fetch Users'
}

export class StartFetchUsers implements Action {
  readonly type = UsersActionTypes.StartFetchUsers;

  constructor() {
  }
}

export class FinishFetchUsers implements Action {
  readonly type = UsersActionTypes.FinishFetchUsers;

  constructor() {
  }
}

export type UsersActions =
  StartFetchUsers
  | FinishFetchUsers
  ;
