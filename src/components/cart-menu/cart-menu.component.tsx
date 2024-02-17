import { useContext } from "react";
import { useNavigate } from "react-router-dom";

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
  const { products, productsTotalPrice } = useContext(CartContext);

  const navigate = useNavigate();

  const handleCheckoutNavigate = () => {
    navigate("/checkout");
    toogleCart();
  };

  return (
    <div
      className="w-full h-height-cartMenu absolute top-[3.75em] left-0 z-10 transition-all duration-300 flex"
      style={{
        visibility: isVisible ? "visible" : "hidden",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div
        onClick={toogleCart}
        className="bg-transparentBlack w-full h-full"
      ></div>

      <section className="w-[90%] max-w-[26.5em] h-full bg-grayLight absolute right-0 p-5 overflow-auto [&::-webkit-scrollbar]:hidden">
        <h3 className="text-xl font-semibold text-black">Seu carrinho</h3>

        <div className="flex flex-col gap-4 my-4">
          {products.map((product) => {
            return <CartItem key={product.id} product={product} />;
          })}
        </div>

        {products.length > 0 ? (
          <>
            <span className="font-semibold text-black">
              Total: R${productsTotalPrice.toFixed(2)}
            </span>

            <div className="mt-4" onClick={handleCheckoutNavigate}>
              <CustomerButton
                color={"#E74C3C"}
                icon={<BiSolidCartAdd color="#FFF" size={16} />}
                children={"Ir para o checkout"}
              ></CustomerButton>
            </div>
          </>
        ) : (
          <p className="text-black font-semibold">
            Seu carrinho está vazio. Vamos comprar!
          </p>
        )}
      </section>
    </div>
  );
};

export default CartMenu;
