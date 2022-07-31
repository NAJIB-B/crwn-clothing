import { CART_ACTION_TYPES } from "./dropdown.types";
import { createAction } from "../../utils/reducer/reducer.utils";
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

const addCartItem = (cartItems, productToAdd) => {
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

const addItemQuantity = (cartItems, productToAdd) => {
  return cartItems.map((item) =>
    item.id === productToAdd.id
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );
};
const reduceItemQuantity = (cartItems, productToAdd) => {
  const item = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
  if (item.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== item.id);
  }
  return cartItems.map((item) =>
    item.id === productToAdd.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
const removeCartItem = (cartItems, productToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
};

export const addQuantity = (cartItems, productToAdd) => {
  const newCartItems = addItemQuantity(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const reduceQuantity = (cartItems, productToAdd) => {
  const newCartItems = reduceItemQuantity(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const removeItem = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const setDropdown = (bool) => {
  return createAction(CART_ACTION_TYPES.DROPDOWN, bool);
};
