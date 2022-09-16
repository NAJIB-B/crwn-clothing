import { CART_ACTION_TYPES } from "./dropdown.types";
import { CategoryItem } from "../categories/category.types";
import { createAction, withMatcher } from "../../utils/reducer/reducer.utils";
import { Action, ActionWithPayload } from "../../utils/reducer/reducer.utils";
import { CartItem } from "./dropdown.types";
import { INITIAL_STATE } from "./dropdown.reducer";
import { useDispatch } from "react-redux";

// const { cartItems } = INITIAL_STATE;

// const updateCartItemReducer = (newCartItems) => {
//   const newCartCount = newCartItems.reduce(
//     (total, cartItem) => total + cartItem.quantity,
//     0
//   );
//   const newTotal = newCartItems.reduce(
//     (total, cartItem) => total + cartItem.quantity * cartItem.price,
//     0
//   );

//   return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
//     cartItems: newCartItems,
//     total: newTotal,
//     cartCount: newCartCount,
//   });
// };

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const addItemQuantity = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
  return cartItems.map((item) =>
    item.id === productToAdd.id
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );
};
const reduceItemQuantity = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
  const item = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
  if (item && item.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== item.id);
  }
  return cartItems.map((item) =>
    item.id === productToAdd.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
const removeCartItem = (
  cartItems: CartItem[],
  productToRemove: CategoryItem
): CartItem[] => {
  return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
};

export const addQuantity = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItems = addItemQuantity(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export type SetItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;
export type SetDropdownType = ActionWithPayload<
  CART_ACTION_TYPES.DROPDOWN,
  boolean
>;

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const reduceQuantity = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItems = reduceItemQuantity(cartItems, productToAdd);
  return setCartItems(newCartItems);
};
export const removeItem = (
  cartItems: CartItem[],
  productToRemove: CategoryItem
) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return setCartItems(newCartItems);
};

export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};
export const setDropdown = withMatcher((bool: boolean): SetDropdownType => {
  return createAction(CART_ACTION_TYPES.DROPDOWN, bool);
});
