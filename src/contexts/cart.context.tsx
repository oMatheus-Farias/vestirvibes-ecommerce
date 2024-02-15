import { createContext, ReactNode, useState } from "react";

//Utilities
import CartProduct from "../types/cart.types";

interface CartContextData {
  isVisible: boolean;
  products: CartProduct[];
  toogleCart: () => void;
}

export const CartContext = createContext({} as CartContextData);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [products, setProducts] = useState<CartProduct[]>([]);

  const toogleCart = () => {
    setIsVisible(!isVisible);
  };

  return (
    <CartContext.Provider value={{ isVisible, products, toogleCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
