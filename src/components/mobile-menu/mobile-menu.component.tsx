import { useState } from "react";
import { Link } from "react-router-dom";

//Icon
import { IoMenuOutline } from "react-icons/io5";

//Components
import Cart from "../cart/cart.component";
import NavigateMenu from "../navigate-menu/navigate-menu.component";

const MobileMenu = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);

  return (
    <>
      <NavigateMenu
        visible={visibleMenu}
        closeMenu={() => setVisibleMenu(false)}
      />

      <header className="p-4 bg-primary w-full h-[3.75em] flex justify-between">
        <button className="cursor-pointer" onClick={() => setVisibleMenu(true)}>
          <IoMenuOutline size={30} color="#000" />
        </button>

        <Link to="/">
          <img
            src="logo.svg"
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
