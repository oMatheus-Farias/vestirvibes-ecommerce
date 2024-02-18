import { useState, useContext } from "react";
import { Link } from "react-router-dom";

//Icon
import { IoMenuOutline } from "react-icons/io5";

//Components
import Cart from "../cart/cart.component";
import NavigateMenu from "../navigate-menu/navigate-menu.component";

//Utilitie
import { CartContext } from "../../contexts/cart.context";

interface MobileMenuProps {
  logo?: string;
}

const MobileMenu = ({ logo }: MobileMenuProps) => {
  const { isVisible } = useContext(CartContext);

  const [visibleMenu, setVisibleMenu] = useState(false);

  return (
    <>
      <NavigateMenu
        visible={visibleMenu}
        closeMenu={() => setVisibleMenu(false)}
        logo={logo}
      />

      <header className="p-4 bg-primary w-full h-[3.75em] flex justify-between">
        <button
          className="cursor-pointer"
          onClick={() => setVisibleMenu(!isVisible && true)}
        >
          <IoMenuOutline size={30} color="#000" />
        </button>

        <Link to="/">
          <img
            src={`${logo ? logo : "logo.svg"}`}
            alt="logo VestirVibes"
            className="cursor-pointer"
          />
        </Link>

        <Cart />
      </header>
    </>
  );
};

export default MobileMenu;
