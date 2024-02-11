import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";

interface NavigateMenuProps {
  visible: boolean;
  closeMenu: () => void;
}

const NavigateMenu = ({ visible, closeMenu }: NavigateMenuProps) => {
  return (
    <section
      className="flex justify-between absolute w-full h-screen z-10 transition-all duration-300"
      style={{
        visibility: visible ? "visible" : "hidden",
        opacity: visible ? 1 : 0,
      }}
    >
      <div className="w-[86%] bg-white">
        <div className="p-4 flex justify-between items-center bg-primary h-[3.75em]">
          <img src="logo.svg" alt="logo VestirVibes" />

          <button className="cursor-pointer" onClick={closeMenu}>
            <IoCloseOutline size={30} color="#000" />
          </button>
        </div>

        <nav className="mt-10 px-5 w-full">
          <ul className="flex flex-col gap-4">
            <li>
              <Link to={""}>Explorar</Link>
            </li>
            <li>
              <Link to={""}>Login</Link>
            </li>
            <li>
              <Link to={""}>Criar Conta</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-[14%] bg-transparentBlack" onClick={closeMenu}></div>
    </section>
  );
};

export default NavigateMenu;
