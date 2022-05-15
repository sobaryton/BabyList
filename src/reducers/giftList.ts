import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  gifts: [] | GiftType[]
}

export type GiftType = {
  id: string
  wishlistId: string
  url: string
  image: string
  title: string
  description: string
  category: string
  amount: number
  remainingAmount?: number | undefined
  currency: string
  store: string
  status: 'TO_OFFER' | 'OFFERED' | 'PARTLY_FUNDED'
  createdAt: Date
  updatedAt?: Date
  deletedAt?: Date
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
