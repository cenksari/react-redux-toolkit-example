import { createSlice } from '@reduxjs/toolkit';

import Storage from '../tools/Storage';

export const memberSlice = createSlice({
  name: 'member',
  initialState: {
    member: Storage.getData('member') ?? null,
  },
  reducers: {
    addMember: (state, action) => {
      Storage.setData('member', action.payload);

      state.member = action.payload;
    },
    removeMember: (state) => {
      Storage.removeData('member');

      state.member = null;
    },
  },
});

export const { addMember, removeMember } = memberSlice.actions;

export default memberSlice.reducer;
