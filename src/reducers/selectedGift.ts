import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  selectedGift: GiftType | undefined
}

export type Transaction = {
  id: string
  giftId: string
  type: "ORDER" | "PARTICIPATE"
  name: string
  email: string
  message: string
  amount: number
  currency: string
  anonymous?: boolean
  createdAt?: Date
  updatedAt?: Date
  canceledAt?: Date
  giftVersion: string
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
  transactions?: Transaction[]
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
