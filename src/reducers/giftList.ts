import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { GiftType } from './selectedGift';

type GiftListState = {
  gifts: GiftType[];
};

const giftListSlice = createSlice({
  name: 'giftList',
  initialState: {
    gifts: [],
  } as GiftListState,
  reducers: {
    setGiftList: (state, action: PayloadAction<GiftType[]>) => {
      state.gifts = action.payload;
    },
  },
});

export const { setGiftList } = giftListSlice.actions;

export default giftListSlice.reducer;
