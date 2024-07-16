import { createSlice } from '@reduxjs/toolkit'

export interface ExampleState {
  count: number
}

const initialState: ExampleState = {
  count: 0,
}

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    increment: (state: { count: number }) => {
      state.count = state.count + 1
    },
    decrement: (state: { count: number }) => {
      state.count = state.count - 1
    },
  },
})

export const { increment, decrement } = exampleSlice.actions

export default exampleSlice.reducer
