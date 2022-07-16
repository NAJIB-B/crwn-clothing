import { useState } from "react";
import { createContext } from "react";
import PROdUCTS from "../shop-data.json";

export const ProductContext = createContext({
  Product: [],
});

export const ProductProvider = ({ children }) => {
  const [Product, setProduct] = useState(PROdUCTS);
  const value = { Product };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
