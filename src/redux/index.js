import {configureStore} from '@reduxjs/toolkit';

import {sliceCategory} from './categoryStore';

export const {add} = sliceCategory.actions;

export const store = configureStore({
  reducer: {
    category: sliceCategory.reducer,
  },
});
