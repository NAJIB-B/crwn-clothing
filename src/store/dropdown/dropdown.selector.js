import { createSelector } from "reselect";

export const selectCartReducer = (state) => state.dropdown;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);
export const selectDropdown = createSelector(
  [selectCartReducer],
  (cart) => cart.dropdown
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);
