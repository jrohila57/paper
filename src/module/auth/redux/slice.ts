import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthInitialState {}
const initialState: AuthInitialState = {};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTaskData: (state, action: PayloadAction<Auth>) => ({ ...state, ...action.payload, loading: false }),
    getDashboardData: (state) => ({ ...state, loading: true }),
  },
});

export const { setTaskData, getDashboardData } = authSlice.actions;

export const authReducer = authSlice.reducer;

export type DashboardSliceActions =
  | ReturnType<typeof setTaskData>
  | ReturnType<typeof getDashboardData>;
