import { createSelector, createFeatureSelector } from '@ngrx/store';
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

const usersFeature = createFeatureSelector<State>('users');
export const getLoading = createSelector(usersFeature, (state: State) => state.loading);

export function reducer(state = initialState, action: UsersActions): State {
  switch (action.type) {
    case UsersActionTypes.StartFetchUsers:
      return { ...state, loading: true };
    case UsersActionTypes.FinishFetchUsers:
      return { ...state, loading: false };
    default:
      return state;
  }
}
