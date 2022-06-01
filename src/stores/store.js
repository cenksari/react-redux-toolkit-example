import { configureStore } from '@reduxjs/toolkit';

import memberReducer from '../slices/memberSlice';
import languageReducer from '../slices/languageSlice';

const store = configureStore({
  reducer: {
    member: memberReducer,
    language: languageReducer,
  },
});

export default store;
