import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../actions/app/appSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
