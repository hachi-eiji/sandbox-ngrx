import { createAction, union } from '@ngrx/store';
import { User } from '../../models/user';

export const startFetchUsers = createAction(
  '[Users] Start Fetch Users'
);

// creatorを渡している
export const successFetchUsers = createAction(
  '[Users API] Success Fetch Users',
  (payload: { users: User[] }) => ({ payload })
);

export const finishFetchUsers = createAction(
  '[Users] Finish Fetch Users'
);

export const error = createAction(
  '[Users] Error',
  (payload: { error: any }) => ({ payload })
);

export const updateUserName = createAction(
  '[Users API] Update User Name',
  (payload: { user: User }) => ({ payload })
  )
;

const actions = union({
  startFetchUsers,
  successFetchUsers,
  finishFetchUsers,
  error,
  updateUserName
});

export type UserActionUnion = typeof actions;

