import {State} from '../root.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import { AuthState } from './auth.reducer';



export const selectAuth = createFeatureSelector<State, AuthState>('auth');

export const selectAuthUser = createSelector(
  selectAuth,
  (state: AuthState) => state.user
);

export const selectAuthError = createSelector(
  selectAuth,
  (state: AuthState) => state.authError
);

export const selectAuthLoading = createSelector(
  selectAuth,
  (state: AuthState) => state.loading
);
