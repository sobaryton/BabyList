import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GiftStatus } from './selectedGift'

type InitialState = {
  isOpen: boolean
  data:
  {
    amount: number
    status: GiftStatus
    remainingAmount?: number
    alreadyBought?: boolean
  }
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    data: {
      amount: 0,
      status: GiftStatus.TO_OFFER,
      remainingAmount: 0,
      alreadyBought: false,
    }
  } as InitialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<{ amount: number, status: GiftStatus, remainingAmount?: number, alreadyBought: boolean }>) => {
      state.isOpen = !state.isOpen
      state.data.amount = action.payload.amount
      state.data.status = action.payload.status
      state.data.remainingAmount = action.payload.remainingAmount ? action.payload.remainingAmount : 0
      state.data.alreadyBought = action.payload.alreadyBought ? action.payload.alreadyBought : false
    }
  }
})

export const { toggleModal } = modalSlice.actions

export default modalSlice.reducer
