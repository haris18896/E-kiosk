import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  test: {
    id: null,
    value: 12,
  },
};

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setTest: (state, action) => {
      state.test = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setTest} = testSlice.actions;

//Selector: access the global store and pull the items out from the basket store
export const selectTest = state => state.test.test;

export default testSlice.reducer;
