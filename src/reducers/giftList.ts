import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GiftType } from './selectedGift'

type InitialState = {
  gifts: GiftType[]
}

const giftListSlice = createSlice({
  name: 'modal',
  initialState: {
    gifts: []
  } as InitialState,
  reducers: {
    setGiftList: (state, action: PayloadAction<GiftType[]>) => {
      state.gifts = action.payload
    }
  }
})

export const { setGiftList } = giftListSlice.actions

export default giftListSlice.reducer
