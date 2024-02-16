import { useContext } from "react";

//Utilities
import { CartContext } from "../../contexts/cart.context";

//Component
import CartMenu from "../cart-menu/cart-menu.component";

//Icon
import { IoCartOutline } from "react-icons/io5";

const Cart = () => {
  const { toogleCart, isVisible } = useContext(CartContext);

  return (
    <>
      <div className="cursor-pointer relative" onClick={toogleCart}>
        <IoCartOutline size={30} color="#FFF" />

        <div className="absolute w-4 h-4 bg-black rounded-full bottom-[-6px] right-[-6px] flex justify-center items-center text-white text-xs">
          5
        </div>
      </div>

      <CartMenu isVisible={isVisible} toogleCart={toogleCart} />
    </>
  );
};

export default Cart;
