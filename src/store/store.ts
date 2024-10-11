import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './settings/UserSlice';
import SettingsSlice from './settings/SettingsSlice';

export const store = configureStore({
  reducer: {
    user: UserSlice,
    settings: SettingsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
