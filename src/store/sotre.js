import { configureStore } from '@reduxjs/toolkit';
import userReducer from './feauters/user.slice';
export const store = configureStore({
  reducer: {
    userReducer,
  },
});
