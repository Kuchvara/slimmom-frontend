import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from '../auth/auth_action';
// Нужно также подумать

const user = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload, //  Здесь нужно подумать под бек
  [loginSuccess]: (_, { payload }) => payload, // Здесь нужно подумать под бек, убрал user
  [logoutSuccess]: () => null,
  [getCurrentUserSuccess]: (_, { payload }) => payload, //  Здесь нужно подумать под бек
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.accessToken,
  [loginSuccess]: (_, { payload }) => payload.accessToken,
  [logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
  [getCurrentUserError]: (_, { payload }) => payload,
});

const isLogged = createReducer(false, {
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [logoutSuccess]: () => false,

  [registerError]: () => false,
  [loginError]: () => false,
  [logoutError]: () => false,
  [getCurrentUserError]: () => false,
});

// Cостояние спиннера при запросах
const isLoading = createReducer(false, {
  [registerRequest]: () => true,
  [registerSuccess]: () => false,
  [registerError]: () => false,

  [loginRequest]: () => true,
  [loginSuccess]: () => false,
  [loginError]: () => false,

  [logoutRequest]: () => true,
  [logoutSuccess]: () => false,
  [logoutError]: () => false,

  [getCurrentUserRequest]: () => true,
  [getCurrentUserRequest]: () => false,
  [getCurrentUserRequest]: () => false,
});

export default combineReducers({
  user,
  token,
  isLogged,
  error,
  isLoading,
});
