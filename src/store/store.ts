import { configureStore } from '@reduxjs/toolkit'
import modalReducer from '../reducers/modal'
import giftListReducer from '../reducers/giftList'

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    giftList: giftListReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
