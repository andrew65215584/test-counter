import { createReducer } from '@reduxjs/toolkit';

import {
increment,
decrement,
 
} from './actions';

const initialState = {
  value : 0
};

export const counterReducer = createReducer(initialState, {
  [increment]: (state, { payload }) => ({
    value : state.value + payload
    
  }),
  [decrement]: (state, { payload }) => ({
    value : state.value - payload
    
  }),
  
});
