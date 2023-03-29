import { createSlice, configureStore } from '@reduxjs/toolkit'

const collectionSlice = createSlice({
  name: 'collection',
  initialState: [],
  reducers: {
    like(state, action) {
      state.push({ ...action.payload, liked_by_user: true })
    },
    unLike(state, action) {
      const index = state
        .map((photo) => {
          return photo.id
        })
        .indexOf(action.payload.id)

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
