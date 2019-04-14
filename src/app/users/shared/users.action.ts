import { Action, createAction, union } from '@ngrx/store';
import { User } from '../../models/user';

export enum UsersActionTypes {
  FinishFetchUsers = '[Users] Finish Fetch Users',
  Error = '[Users] Error',
  UpdateUserName = '[Users API] Update User Name',
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
  | FinishFetchUsers
  | Error
  | UpdateUserName
  ;


export const startFetchUsers = createAction(
  '[Users] Start Fetch Users'
);

// creatorを渡している
export const successFetchUsers = createAction(
  '[Users API] Success Fetch Users',
  (payload: { users: User[] }) => ({ payload })
);

const actions = union({
  startFetchUsers,
  successFetchUsers
});

export type UserActionUnion = typeof actions;

