import { createSelector, createFeatureSelector } from '@ngrx/store';
import { User } from '../../models/user';
import { UsersActions, UsersActionTypes } from './users.action';

export interface State {
  users: Array<User>;
  loading: boolean;
  error: any;
}

export const initialState: State = {
  loading: false,
  users: null,
  error: null
};

const usersFeature = createFeatureSelector<State>('users');
export const getState = createSelector(usersFeature, (state: State) => state);

export function reducer(state = initialState, action: UsersActions): State {
  switch (action.type) {
    case UsersActionTypes.StartFetchUsers:
      return { ...state, loading: true };
    case UsersActionTypes.SuccessFetchUser:
      return { ...state, users: action.payload.users };
    case UsersActionTypes.FinishFetchUsers:
      return { ...state, loading: false };
    case UsersActionTypes.UpdateUserName:
      const users = state.users.map((user) => {
        if (user.id !== action.payload.user.id) {
          return user;
        }
        return action.payload.user;
      });
      return { ...state, users };
    case UsersActionTypes.Error:
      return { users: initialState.users, loading: false, error: action.payload.error };
    default:
      return state;
  }
}
