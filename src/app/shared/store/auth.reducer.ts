import { createReducer, on } from '@ngrx/store';
import { login } from './auth.actions';

export const initialState = {};

export const saveUserReducer = createReducer(
  initialState,
  on(login, (state, {username, password}) => {
      return {...state, username, password};
  } ),
);