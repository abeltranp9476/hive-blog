import { createSlice } from '@reduxjs/toolkit';

import {
  fetchUserInfo
} from "./profileApi";

const initialState = {
  user: {},
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setProfile: (state, action) => {
      state.user = action.payload;
    },
  },

});

export const { setProfile } = profileSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectProfile = (state) => state.profile;


export default profileSlice.reducer;


export const getProfile = () => async (dispatch) => {
  const response = await fetchUserInfo();
  if (response?.data?.result) {
    dispatch(setProfile(response?.data?.result));
  }
}