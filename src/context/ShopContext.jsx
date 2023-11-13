import { createContext, useState } from "react";
import { sampleBread } from "../data/breadsData";

export const ShopContext = createContext();

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < sampleBread.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const TotalCart = () => {
    let AmountTotal = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = sampleBread.find((bread) => bread.id === Number(item));
        AmountTotal += cartItems[item] * itemInfo.price;
      }
    }

    return AmountTotal;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const removeItem = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] = 0) }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeToCart,
    removeItem,
    TotalCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
