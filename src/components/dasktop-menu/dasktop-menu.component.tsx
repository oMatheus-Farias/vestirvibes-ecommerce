import { useContext } from "react";
import { Link } from "react-router-dom";

//Component
import Cart from "../cart/cart.component";

//Utilities
import { AuthContext } from "../../contexts/auth.context";

interface DasktopMenuProps {
  logo?: string;
}

const DasktopMenu = ({ logo }: DasktopMenuProps) => {
  const { signed, logOut } = useContext(AuthContext);

  const signOut = async () => {
    await logOut();
  };

  return (
    <header className="bg-dark w-full h-[3.75em] p-5 flex items-center justify-between">
      <Link to="/">
        <img
          src={`${logo ? logo : "logo.svg"}`}
          alt="logo VestirVibes"
          className="cursor-pointer"
        />
      </Link>

      <nav className="text-white font-bold">
        <ul className="flex flex-row gap-5 items-center">
          <li>
            <Link to={"/explore"}>Explorar</Link>
          </li>
          {!signed ? (
            <>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
              <li>
                <Link to={"/register"}>Criar Conta</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <button onClick={signOut}>Sair</button>
              </li>
            </>
          )}
          <li>
            <Cart />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default DasktopMenu;
