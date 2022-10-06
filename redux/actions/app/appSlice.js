import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lang: "fr",
  connected_user: null,
};


export const appSlice = createSlice({
  name: 'app',
  initialState,

  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload
    },
    setConnectedUser: (state, action) => {
      state.connected_user = action.payload
    },
  },
})

// Selectors:
export const selectLang = (state) => state.app.lang;
export const selectConnectedUser = (state) => state.app.connected_user;


export const { 
  setLang, 
  setConnectedUser,
} = appSlice.actions;

export default appSlice.reducer;