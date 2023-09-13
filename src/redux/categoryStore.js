import {createSlice} from '@reduxjs/toolkit';

const init = [
  {
    id: 1,
    name: 'Soft',
  },
  {
    id: 2,
    name: 'Hot',
  },
  {
    id: 3,
    name: 'Hard',
  },
];

export const sliceCategory = createSlice({
  name: 'category',
  initialState: [],
  reducers: {
    add: (state, action) => {
      return state;
    },
  },
});
