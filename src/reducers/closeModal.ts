// export const closeModalReducer = (state: { openModal: any, data?: Record<string, any> }, action: { type: any, payload?: any }) => {
//   switch (action.type) {
//     case 'toggleModal':
//       return { openModal: !state.openModal, data: state.data }
//     default:
//       throw new Error();
//   }
// }

import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: true,
    // card: {}
  },
  reducers: {
    toggleModal: (state, action) => {
      state.isOpen = !state.isOpen
      // state.card = action.payload.card
    }
  }
})

export const { toggleModal } = modalSlice.actions

export default modalSlice.reducer
