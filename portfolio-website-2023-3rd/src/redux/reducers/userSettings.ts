import { createSlice, current } from '@reduxjs/toolkit';
import type { RootState } from '@/redux/store';

export type UserSettings = {

};

const initialState: UserSettings = {

};

const userSettingsSlice = createSlice({
  name: 'userSettings',
  initialState,
  reducers: {

  }
});

export const { } = userSettingsSlice.actions;
export const selectUserSettings = (state: RootState) => state.userSettings;
export default userSettingsSlice.reducer;