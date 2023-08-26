import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type Pizza = {
  id: string, 
  title: string, 
  price: number, 
  imageUrl: string, 
  sizes: number[], 
  types: number[],
  rating: number,
}

interface PizzaSliceState {
  items: Pizza[]
}

const initialState: PizzaSliceState = {
  items: [],
}

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
     state.items = action.payload;
    }
  }
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
