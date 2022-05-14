// export const closeModalReducer = (state: { openModal: any, data?: Record<string, any> }, action: { type: any, payload?: any }) => {
//   switch (action.type) {
//     case 'toggleModal':
//       return { openModal: !state.openModal, data: state.data }
//     default:
//       throw new Error();
//   }
// }

import { createSlice } from '@reduxjs/toolkit'

type InitialState = {
  isOpen: boolean
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    // card: {}
  } as InitialState,
  reducers: {
    toggleModal: (state) => {
      state.isOpen = !state.isOpen
      // state.card = action.payload.card
    }
  }
})

export const { toggleModal } = modalSlice.actions

export default modalSlice.reducer
