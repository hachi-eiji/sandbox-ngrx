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
  users: [],
  error: null
};

const usersFeature = createFeatureSelector<State>('users');
export const getLoading = createSelector(usersFeature, (state: State) => state.loading);
export const getUsers = createSelector(usersFeature, (state: State) => state.users);
export const error = createSelector(usersFeature, (state: State) => state.error);

export function reducer(state = initialState, action: UsersActions): State {
  switch (action.type) {
    case UsersActionTypes.StartFetchUsers:
      return { ...state, loading: true };
    case UsersActionTypes.SuccessFetchUser:
      return { ...state, users: action.payload.users };
    case UsersActionTypes.FinishFetchUsers:
      return { ...state, loading: false };
    case UsersActionTypes.Error:
      return { users: initialState.users, loading: false, error: action.payload.error };
    default:
      return state;
  }
}
