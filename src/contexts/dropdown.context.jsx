import { createContext } from "react";
import { useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id == productToAdd.id
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
  const item = cartItems.find((cartItem) => cartItem.id == productToAdd.id);
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

export const DropdownContext = createContext({
  dropdown: false,
  setDropdown: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  total: 0,
  addQuantity: () => {},
  reduceQuantity: () => {},
  removeItem: () => {},
});

export const DropdownProvider = ({ children }) => {
  const [dropdown, setDropdown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setTotal(newTotal);
  }, [cartItems]);

  const addQuantity = (productToAdd) => {
    setCartItems(addItemQuantity(cartItems, productToAdd));
  };
  const reduceQuantity = (productToAdd) => {
    setCartItems(reduceItemQuantity(cartItems, productToAdd));
  };
  const removeItem = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const value = {
    dropdown,
    setDropdown,
    addItemToCart,
    cartItems,
    cartCount,
    addQuantity,
    reduceQuantity,
    removeItem,
    total,
  };

  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};
