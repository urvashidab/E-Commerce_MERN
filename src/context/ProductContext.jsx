import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ProductContext = createContext();

export const ContextProvider = ({ children }) => {
  const currency = "$";
  const deliveryFees = 10;
  const tax = 8; // 8%
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // function to add items to cart

  function addToCart(product, size, quantity) {
    setCartItems((prevCart) => {
      // check if product already exists with same size
      const existingItem = prevCart.find((item) => {
        return item._id === product._id && item.size === size;
      });

      // if exists → increase quantity
      if (existingItem) {
        return prevCart.map((item) => {
          if (item._id === product._id && item.size === size) {
            return {
              ...item,
              quantity: item.quantity + quantity,
            };
          }

          return item;
        });
      }

      // if new item → add to cart
      return [
        ...prevCart,
        {
          ...product,
          size: size,
          quantity: quantity,
        },
      ];
    });
  }

  // function to update quanity of the cart on --cart page--

  function updateCartQuantity(size, item) {}

  // page refresh but items in the cart dont get removed
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // function to delete items in cart -- cart page
  function deleteFromCart(id, size) {
    setCartItems((prev) =>
      prev.filter((item) => !(item._id === id && item.size === size)),
    );
  }
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
        cartItems,
        addToCart,
        tax,
        deleteFromCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
