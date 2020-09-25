import {User} from '../../modules/auth/models/user.model';
import * as AuthActions from './auth.actions';
import {Action, createReducer, on} from '@ngrx/store';

const initialState = {
  user: null as User | null,
  authError: null as string | null,
  loading: false
};
export type AuthState = typeof initialState;

const _authReducer = createReducer(
  initialState,
  on(
    AuthActions.loginStart,
    state => ({
      ...state,
      authError: null
    })
  ),
  on(
    AuthActions.signupStart,
    state => ({
      ...state,
      authError: null
    })
  ),
  on(
    AuthActions.authenticateSuccess,
    (state, userData) => {
      const user = new User(
        userData.email,
        userData.userId,
        userData.token,
        userData.expirationDate
      );
      return {
        ...state,
        user,
        authError: null,
        loading: false
      };
    }
  ),
  on(
    AuthActions.authenticateFail,
    (state, error) => ({
      ...state,
      user: null,
      authError: error.message,
      loading: false
    })
  ),
  on(
    AuthActions.clearError,
    state => ({
      ...state,
      authError: null,
    })
  ),
  on(
    AuthActions.logout,
    state => ({
      ...state,
      user: null
    })
  )
);

export function authReducer(state: AuthState | undefined, action: Action): AuthState {
  return _authReducer(state, action);
}
