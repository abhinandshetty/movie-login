/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    email: '',
    password: '',
  },
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { login } = loginSlice.actions;

export default loginSlice.reducer;
