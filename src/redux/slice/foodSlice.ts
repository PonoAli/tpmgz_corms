import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type Food = {
  id: string, 
  title: string, 
  price: number, 
  imageUrl: string, 
  sizes: number[], 
  types: number[],
  rating: number,
}

interface FoodSliceState {
  items: Food[]
}

const initialState: FoodSliceState = {
  items: [],
}

const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    setItems(state, action) {
     state.items = action.payload;
    }
  }
});

export const { setItems } = foodSlice.actions;

export default foodSlice.reducer;
