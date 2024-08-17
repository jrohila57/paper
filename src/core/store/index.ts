import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiMiddlewares, rootReducer } from './rootSlices';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (gdm) => gdm().concat(apiMiddlewares),
  enhancers: (getDefaultEnhancers) => getDefaultEnhancers({ autoBatch: false }),
  preloadedState: undefined,
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
