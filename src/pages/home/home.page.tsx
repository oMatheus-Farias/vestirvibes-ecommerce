import { useContext } from "react";

import { ScreenSizeContext } from "../../contexts/screen-size.context";

import DasktopMenu from "../../components/dasktop-menu/dasktop-menu.component";
import MobileMenu from "../../components/mobile-menu/mobile-menu.component";

const HomePage = () => {
  const { dasktop } = useContext(ScreenSizeContext);

  return (
    <>{dasktop !== null ? dasktop ? <DasktopMenu /> : <MobileMenu /> : null}</>
  );
};

export default HomePage;
