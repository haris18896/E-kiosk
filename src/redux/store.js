import {configureStore} from '@reduxjs/toolkit';
import test from './features/test';

export const store = configureStore({
  reducer: {
    testReducer: test,
  },
});

export default store;
