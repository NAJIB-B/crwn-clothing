import { createSelector } from "reselect";
import { dropdownState } from "./dropdown.reducer";
import { CartItem } from "./dropdown.types";
import { RootState } from "../store";
export const selectCartReducer = (state: RootState): dropdownState => state.dropdown;

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
