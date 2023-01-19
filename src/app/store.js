import { configureStore } from '@reduxjs/toolkit'
import savedSearchReducer from '../features/savedSearch/savedSearchSlice'
import likedReducer from '../features/liked/likedSlice'
export const store = configureStore({
  reducer: {
    liked:likedReducer,
    savedSearch:savedSearchReducer
  },
})