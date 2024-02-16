//Components
import CustomerButton from "../customer-button/customer-button.component";

//Icon
import { BiSolidCartAdd } from "react-icons/bi";

interface CartMenuProps {
  isVisible: boolean;
  toogleCart: () => void;
}

const CartMenu = ({ isVisible, toogleCart }: CartMenuProps) => {
  return (
    <div
      onClick={toogleCart}
      className="w-full h-screen absolute top-[3.75em] left-0 bg-transparentBlack z-10 transition-all duration-300"
      style={{
        visibility: isVisible ? "visible" : "hidden",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <section className="w-[90%] max-w-[26.5em] h-screen bg-grayLight absolute right-0 p-5">
        <h3 className="text-xl font-semibold text-black">Seu carrinho</h3>

        <span className="font-semibold text-black">Total: R$ 999.999</span>

        <CustomerButton
          color={"#E74C3C"}
          icon={<BiSolidCartAdd color="#FFF" size={16} />}
          children={"Ir para o checkout"}
        ></CustomerButton>
      </section>
    </div>
  );
};

export default CartMenu;
