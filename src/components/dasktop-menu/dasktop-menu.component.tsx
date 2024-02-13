import { Link } from "react-router-dom";
import Cart from "../cart/cart.component";

const DasktopMenu = () => {
  return (
    <header className="bg-primary w-full h-[3.75em] p-5 flex items-center justify-between">
      <img src="logo.svg" alt="logo VestirVibes" className="cursor-pointer" />

      <nav className="text-white font-bold">
        <ul className="flex flex-row gap-5 items-center">
          <li>
            <Link to={""}>Explorar</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={""}>Criar Conta</Link>
          </li>
          <li>
            <Cart />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default DasktopMenu;
