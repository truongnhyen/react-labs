import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart(state, action) {
      //action.payload = {product, quantity}

      //tim index de biet gio hang co item hay chua
      const newItem = action.payload;
      const idx = state.cartItems.findIndex((x) => x.product.id === newItem.product.id);

      if (idx < 0) {
        //not existed in cart yet
        state.cartItems.push(newItem);
      } else {
        //existed in cart

        // state.cartItems[idx].quantity = state.cartItems[idx].quantity + newItem.quantity;
        state.cartItems[idx].quantity += newItem.quantity;
      }
    },

    removeFromCart(state, action) {},

    removeAllFromCart(state, action) {},

    clearCart(state, action) {
      state.CartItems = [];
    },
  },
});
const { reducer, actions } = cartSlice;
export const { addToCart, removeFromCart, removeAllFromCart, clearCart } = actions;
export default reducer;
