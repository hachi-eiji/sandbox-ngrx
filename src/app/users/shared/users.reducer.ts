import { User } from '../../models/user';
import { UsersActions, UsersActionTypes } from './users.action';

export interface State {
  users: Array<User>;
  loading: boolean;
}

export const initialState: State = {
  loading: false,
  users: []
};

export function reducer(state = initialState, action: UsersActions): State {
  switch (action.type) {
    case UsersActionTypes.StartFetchUsers:
      return { ...state, loading: true };
    default:
      return state;
  }
}
