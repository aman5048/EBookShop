import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../reducers/cartReducer";
const cartInitialState = {
  cartList: [],
  total: 0,
};

const CartContext = createContext(cartInitialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, cartInitialState);

  function addToCart(product) {
    const updatedList = [...state.cartList, product];
    const updatedtotal = state.total + product.price;
    dispatch({
      type: "ADD_TO_CART",
      payload: { products: updatedList, total: updatedtotal },
    });
  }

  function removeFromCart(product) {
    const updatedList = state.cartList.filter((item) => item.id !== product.id);
    const updatedTotal = state.total - product.price;
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { products: updatedList, total: updatedTotal },
    });
  }

  function clearCart() {
    dispatch({ type: "CLEAR_CART" });
  }

  const value = {
    cartList: state.cartList,
    total: state.total,
    addToCart,
    removeFromCart,
    clearCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export function useCart() {
  return useContext(CartContext);
}
