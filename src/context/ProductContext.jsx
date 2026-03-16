import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ProductContext = createContext();

export const ContextProvider = ({ children }) => {
  const currency = "$";
  const deliveryFees = 10;

  return (
    <ProductContext.Provider value={{ products, currency, deliveryFees }}>
      {children}
    </ProductContext.Provider>
  );
};
