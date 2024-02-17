import { useContext } from "react";
import MoonLoader from "react-spinners/MoonLoader";

//Components
import DasktopMenu from "../dasktop-menu/dasktop-menu.component";
import MobileMenu from "../mobile-menu/mobile-menu.component";
import Footer from "../footer/footer.component";

//Utilitie
import { ScreenSizeContext } from "../../contexts/screen-size.context";

const RedirectComponent = () => {
  const { dasktop } = useContext(ScreenSizeContext);

  return (
    <div className="flex flex-col min-h-screen">
      {dasktop !== null ? dasktop ? <DasktopMenu /> : <MobileMenu /> : null}

      <div className="w-full h-height-cartMenu flex flex-col items-center justify-center flex-1 text-lg font-semibold gap-4">
        <p>Para prosseguir é necessário o login.</p>
        <p>Você será redirecionado em segundos.</p>

        <div className="mt-5">
          <MoonLoader size={40} color="#000" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RedirectComponent;
