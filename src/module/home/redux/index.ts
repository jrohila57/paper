import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeState } from '../../../resources/types';
 
const initialState: ThemeState = {
  isThemeDark: true,
  loading: false,
};
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isThemeDark = !state.isThemeDark;
    },
    setTheme: (state, action: PayloadAction<boolean>) => {
      state.isThemeDark = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { toggleTheme, setTheme, setLoading } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;

export type ThemeSliceActions =
  | ReturnType<typeof toggleTheme>
  | ReturnType<typeof setTheme>
  | ReturnType<typeof setLoading>;
