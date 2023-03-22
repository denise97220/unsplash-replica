import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = []

const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    like(state, action) {
      // const isLiked = state.some((photo) => {
      //   photo.id === action.payload.id
      // })

      // if (isLiked) return
      console.log(action.payload)
      state.push(action.payload)
    }
  }
})

const store = configureStore({
  reducer: collectionSlice.reducer
})

export const collectionAction = collectionSlice.actions
export default store
