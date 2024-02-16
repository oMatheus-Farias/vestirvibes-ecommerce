import { createContext, ReactNode, useState } from "react";

//Utilities
import CartProduct from "../types/cart.types";
import Product from "../types/product.types";

interface CartContextData {
  isVisible: boolean;
  products: CartProduct[];
  toogleCart: () => void;
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (id: string) => void;
}

export const CartContext = createContext({} as CartContextData);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [products, setProducts] = useState<CartProduct[]>([]);

  const toogleCart = () => {
    setIsVisible(!isVisible);
  };

  const addProductToCart = (product: Product) => {
    const isAlreadyInCart = products.some((item) => item.id === product.id);

    if (isAlreadyInCart) {
      return setProducts((products) =>
        products.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    }

    setProducts((prevState) => [...prevState, { ...product, quantity: 1 }]);
  };

  const removeProductFromCart = (id: string) => {
    setProducts((products) => products.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        isVisible,
        products,
        toogleCart,
        addProductToCart,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
