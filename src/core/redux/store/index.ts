import { configureStore } from '@reduxjs/toolkit';

import logger from 'redux-logger';

import authReducer from '../../../module/auth/redux/slice';

const reducer = {
  auth: authReducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers({
      autoBatch: false,
    }),
});

 