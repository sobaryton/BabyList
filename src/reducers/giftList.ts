import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GiftType } from './selectedGift'

type InitialState = {
  gifts: [] | GiftType[]
}

export const giftListSlice = createSlice({
  name: 'modal',
  initialState: {
    gifts: []
  } as InitialState,
  reducers: {
    getList: (state, action: PayloadAction<GiftType[]>) => {
      state.gifts = action.payload
    }
  }
})

export const { getList } = giftListSlice.actions

export default giftListSlice.reducer
