import { IoMenuOutline } from "react-icons/io5";

//Component
import Cart from "../cart/cart.component";

const MobileMenu = () => {
  return (
    <div className="p-4 bg-primary w-full h-[3.75em] flex justify-between">
      <IoMenuOutline className="cursor-pointer" size={30} color="#000" />

      <img src="logo.svg" alt="logo VestirVibes" className="cursor-pointer" />

      <Cart />
    </div>
  );
};

export default MobileMenu;
