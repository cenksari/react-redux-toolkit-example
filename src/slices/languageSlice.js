import { createSlice } from '@reduxjs/toolkit';

import Storage from '../tools/Storage';

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    language: Storage.getData('language') ?? 'tr',
  },
  reducers: {
    addLanguage: (state, action) => {
      Storage.setData('language', action.payload);

      state.language = action.payload;
    },
    removeLanguage: (state) => {
      Storage.removeData('language');

      state.language = null;
    },
  },
});

export const { addLanguage, removeLanguage } = languageSlice.actions;

export default languageSlice.reducer;
