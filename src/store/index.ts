import { configureStore } from '@reduxjs/toolkit'
import exampleReducer from './example/exampleSlice'

// set up store
export const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
