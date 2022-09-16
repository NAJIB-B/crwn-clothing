import { CART_ACTION_TYPES } from "./dropdown.types";
import { AnyAction } from "redux";
import { CartItem } from "./dropdown.types";
import { setCartItems, setDropdown } from "./dropdown.action";

export type dropdownState = {
  readonly dropdown: boolean;
  readonly cartItems: CartItem[];
};

export const INITIAL_STATE: dropdownState = {
  dropdown: false,
  cartItems: [],
};

export const dropdownReducer = (
  state = INITIAL_STATE,
  action: AnyAction
): dropdownState => {
  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }
  if (setDropdown.match(action)) {
    return {
      ...state,
      dropdown: action.payload,
    };
  }
  return state;
};
