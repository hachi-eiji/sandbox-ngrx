import { Action, createAction, union } from '@ngrx/store';
import { User } from '../../models/user';

export enum UsersActionTypes {
  SuccessFetchUser = '[Users API] Success Fetch Users',
  FinishFetchUsers = '[Users] Finish Fetch Users',
  Error = '[Users] Error',
  UpdateUserName = '[Users API] Update User Name',
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
  | SuccessFetchUser
  | FinishFetchUsers
  | Error
  | UpdateUserName
  ;


export const startFetchUsers = createAction(
  '[Users] Start Fetch Users'
);

const actions = union({
  startFetchUsers,
});

export type UserActionUnion = typeof actions;

