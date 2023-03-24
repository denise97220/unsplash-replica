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
      state.push({ ...action.payload, liked_by_user: true })
    },
    unLike(state, action) {
      const index = state.indexOf(action.payload)
      if (index !== -1) {
        state.splice(index, 1)
      }
    }
  }
})

const store = configureStore({
  reducer: collectionSlice.reducer
})

export const collectionAction = collectionSlice.actions
export default store
