import {User} from '../../modules/auth/models/user.model';
import * as AuthActions from './auth.actions';

const initialState = {
  user: null as User | null,
  tokenExpirationTimer: null as () => {} | null,
  authError: null as string | null,
  loading: false
};
export type AuthInitialStateType = typeof initialState;

export function authReducer(state = initialState, action: AuthActions.AuthActionsType): AuthInitialStateType {
  switch (action.type) {
    case AuthActions.LOGIN_START:
      return {
        ...state,
        authError: null
      };

    case AuthActions.SIGNUP_START:
      return {
        ...state,
        authError: null
      };

    case AuthActions.AUTHENTICATE_SUCCESS:
      const user = new User(
        action.payload.email,
        action.payload.userId,
        action.payload.token,
        action.payload.expirationDate
      );
      return {
        ...state,
        user,
        authError: null,
        loading: false
      };

    case AuthActions.AUTHENTICATE_FAIL:
      return {
        ...state,
        user: null,
        authError: action.payload,
        loading: false
      };

    case AuthActions.CLEAR_ERROR:
      return {
        ...state,
        authError: null,
      };

    case AuthActions.LOGOUT:
      return {
        ...state,
        user: null
      };

    default:
      return state;

  }
}
