import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '~store/store';
import normalize from '~utils/scale';

const SettingsSlice = createSlice({
  name: 'settings',
  initialState: {
    fontSize: normalize(16),
  },
  reducers: {
    setFontSize(state, action) {
      state.fontSize = action.payload;
    },
  },
});

export const { setFontSize } = SettingsSlice.actions;
export default SettingsSlice.reducer;

export const getFontSize = (state: RootState) => state.settings.fontSize;
