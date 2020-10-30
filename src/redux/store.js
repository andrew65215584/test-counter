import { counterReducer } from './reducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: counterReducer,
  devTools: process.env.NODE_ENV !== 'production',
});
export default store;
