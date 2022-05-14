// export const closeModalReducer = (state: { openModal: any, data?: Record<string, any> }, action: { type: any, payload?: any }) => {
//   switch (action.type) {
//     case 'toggleModal':
//       return { openModal: !state.openModal, data: state.data }
//     default:
//       throw new Error();
//   }
// }

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  isOpen: boolean
  amount: number
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    amount: 0
  } as InitialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<number>) => {
      state.isOpen = !state.isOpen
      state.amount = action.payload
    }
  }
})

export const { toggleModal } = modalSlice.actions

export default modalSlice.reducer
