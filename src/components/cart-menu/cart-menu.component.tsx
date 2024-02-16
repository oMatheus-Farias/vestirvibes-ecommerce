import { useContext } from "react";

//Components
import CartItem from "../cart-item/cart-tem.component";
import CustomerButton from "../customer-button/customer-button.component";

//Utilities
import { CartContext } from "../../contexts/cart.context";

//Icon
import { BiSolidCartAdd } from "react-icons/bi";

interface CartMenuProps {
  isVisible: boolean;
  toogleCart: () => void;
}

const CartMenu = ({ isVisible, toogleCart }: CartMenuProps) => {
  const { products } = useContext(CartContext);

  return (
    <div
      onClick={toogleCart}
      className="w-full h-height-cartMenu absolute top-[3.75em] left-0 bg-transparentBlack z-10 transition-all duration-300"
      style={{
        visibility: isVisible ? "visible" : "hidden",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <section className="w-[90%] max-w-[26.5em] h-full bg-grayLight absolute right-0 p-5 overflow-auto [&::-webkit-scrollbar]:hidden">
        <h3 className="text-xl font-semibold text-black">Seu carrinho</h3>

        <div className="flex flex-col gap-4 my-4">
          {products.map((product) => {
            return <CartItem key={product.id} product={product} />;
          })}
        </div>

        <span className="font-semibold text-black">Total: R$ 999.999</span>

        <div className="mt-4">
          <CustomerButton
            color={"#E74C3C"}
            icon={<BiSolidCartAdd color="#FFF" size={16} />}
            children={"Ir para o checkout"}
          ></CustomerButton>
        </div>
      </section>
    </div>
  );
};

export default CartMenu;
