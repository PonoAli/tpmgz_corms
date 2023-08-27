import { configureStore } from '@reduxjs/toolkit'
import filter from './slice/filterSlice'
import cart from './slice/cartSlice'
import food from './slice/foodSlice'

export const store = configureStore ({
  reducer: {
    filter,
    cart,
    food
  },
});

export type RootState = ReturnType<typeof store.getState>