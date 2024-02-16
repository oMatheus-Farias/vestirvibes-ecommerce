import { createContext, ReactNode, useState } from "react";

//Utilities
import CartProduct from "../types/cart.types";
import Product from "../types/product.types";

interface CartContextData {
  isVisible: boolean;
  products: CartProduct[];
  toogleCart: () => void;
  addProductToCart: (product: Product) => void;
}

export const CartContext = createContext({} as CartContextData);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [products, setProducts] = useState<CartProduct[]>([]);

  const toogleCart = () => {
    setIsVisible(!isVisible);
  };

  const addProductToCart = (product: Product) => {
    setProducts((prevState) => [...prevState, { ...product, quantity: 1 }]);
  };

  return (
    <CartContext.Provider
      value={{ isVisible, products, toogleCart, addProductToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
