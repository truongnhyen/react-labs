import { createSelector } from '@reduxjs/toolkit';

export const cartItemsSelector = (state) => state.cart.cartItems;
export const itemsCountSelector = createSelector(
  cartItemsSelector,
  (cartItems) => cartItems.reduce((count, item) => count + item.quantity, 0) //count ban dau = 0 -> count + item.quantity = new number
);

export const totalSelector = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0)
);
