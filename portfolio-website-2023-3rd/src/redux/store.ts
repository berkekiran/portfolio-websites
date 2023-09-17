import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import localStorageMiddleware from './middleware/localStorageMiddleware';
import userSettingsReducer from './reducers/userSettings';

const reHydrateStore = () => {
  if (typeof window !== 'undefined') {
    const state = localStorage.getItem('reduxState');

    if (state !== null) {
      const parsed = JSON.parse(state);
      return {
        userSettings: parsed.userSettings
      };
    }
  }
  return {};
};

export const store = configureStore({
  reducer: {
    userSettings: userSettingsReducer
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(localStorageMiddleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
