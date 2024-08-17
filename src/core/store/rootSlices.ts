import { combineReducers } from 'redux';
import { themeReducer } from '../../module/home/redux';
import { authApi } from '../api/auth-api';
import logger from 'redux-logger';

export const rootReducer = combineReducers({
  theme: themeReducer,
  [authApi.reducerPath]: authApi.reducer,
});

export const apiMiddlewares = [logger, authApi.middleware];
