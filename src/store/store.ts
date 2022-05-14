// import { createStore } from '@reduxjs/toolkit'
// import rootReducer from './reducers'

// const store = createStore(rootReducer)
// export default store

import { configureStore } from '@reduxjs/toolkit'
import reducers from '../reducers/closeModal'

export const store = configureStore({
  reducer: {
    modal: reducers
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
