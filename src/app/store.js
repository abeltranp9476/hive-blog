import { configureStore } from '@reduxjs/toolkit';

import profileReducer from '../pages/profile/profileSlice'

export const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
});
