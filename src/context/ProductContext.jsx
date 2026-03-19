import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ProductContext = createContext();

export const ContextProvider = ({ children }) => {
  const currency = "$";
  const deliveryFees = 10;
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  return (
    <ProductContext.Provider
      value={{
        products,
        currency,
        deliveryFees,
        searchQuery,
        setSearchQuery,
        setShowSearch,
        showSearch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
