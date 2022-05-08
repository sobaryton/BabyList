import { combineReducers } from '@reduxjs/toolkit'
import { ModalAction, ModalActionTypes } from '../actions/actions'

const initialState = {
  modal: {
    isOpen: true,
    children: ''
  }
}

function modal(state = initialState, action: ModalAction) {
  console.log({ action, state, p: ModalActionTypes.ShowModal })
  switch (action.type) {
    case ModalActionTypes.ShowModal:
      return {
        ...state,
        modal: {
          isOpen: true,
          children: action.payload.children
        }
      }
    case ModalActionTypes.HideModal:
      return {
        ...state,
        modal: {
          isOpen: false,
          children: ''
        }
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({ modal })
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
