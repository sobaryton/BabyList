import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  isOpen: boolean,
  data:
  {
    amount: number
    status: string
    remainingAmount?: number | undefined
  }
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    data: {
      amount: 0,
      status: '',
      remainingAmount: 0
    }
  } as InitialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<{ amount: number, status: string, remainingAmount: number | undefined }>) => {
      state.isOpen = !state.isOpen
      state.data.amount = action.payload.amount
      state.data.status = action.payload.status
      state.data.remainingAmount = action.payload.remainingAmount ? action.payload.remainingAmount : 0
    }
  }
})

export const { toggleModal } = modalSlice.actions

export default modalSlice.reducer
