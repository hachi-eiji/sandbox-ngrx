import { Action } from '@ngrx/store';
import { User } from '../../models/user';

export enum UsersActionTypes {
  StartFetchUsers = '[Users] Start Fetch Users',
  SuccessFetchUser = '[Users API] Success Fetch Users',
  FinishFetchUsers = '[Users] Finish Fetch Users',
  Error = '[Users] Error',
  UpdateUserName = '[Users API] Update User Name',
}

export class StartFetchUsers implements Action {
  readonly type = UsersActionTypes.StartFetchUsers;

  constructor() {
  }
}

export class SuccessFetchUser implements Action {
  readonly type = UsersActionTypes.SuccessFetchUser;

  constructor(public payload: { users: User[] }) {
  }
}

export class FinishFetchUsers implements Action {
  readonly type = UsersActionTypes.FinishFetchUsers;

  constructor() {
  }
}

export class Error implements Action {
  readonly type = UsersActionTypes.Error;

  constructor(readonly payload: { error: any }) {
  }
}

export class UpdateUserName implements Action {
  readonly type = UsersActionTypes.UpdateUserName;

  constructor(readonly payload: { user: User }) {
  }
}

export type UsersActions =
  StartFetchUsers
  | SuccessFetchUser
  | FinishFetchUsers
  | Error
  | UpdateUserName
  ;
