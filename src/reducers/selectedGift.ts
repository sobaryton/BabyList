import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  selectedGift: GiftType | undefined
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
  version: number
}

const selectedGiftSlice = createSlice({
  name: 'modal',
  initialState: {
    selectedGift: undefined
  } as InitialState,
  reducers: {
    selectGift: (state, action: PayloadAction<GiftType>) => {
      state.selectedGift = action.payload
    }
  }
})

export const { selectGift } = selectedGiftSlice.actions

export default selectedGiftSlice.reducer
