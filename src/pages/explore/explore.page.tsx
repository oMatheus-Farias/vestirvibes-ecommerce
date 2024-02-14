import { useContext } from "react";

//Utilities
import { ScreenSizeContext } from "../../contexts/screen-size.context";
import { CategoriesContext } from "../../contexts/categories.context";

//Components
import DasktopMenu from "../../components/dasktop-menu/dasktop-menu.component";
import MobileMenu from "../../components/mobile-menu/mobile-menu.component";
import Footer from "../../components/footer/footer.component";

const ExplorePege = () => {
  const { dasktop } = useContext(ScreenSizeContext);
  const { categories } = useContext(CategoriesContext);

  return (
    <div className="flex flex-col min-h-screen">
      {dasktop !== null ? dasktop ? <DasktopMenu /> : <MobileMenu /> : null}

      <main className="w-full flex-1 p-5">
        {categories.map((category) => {
          return <p key={category.id}>{category.displayName}</p>;
        })}
      </main>

      <Footer />
    </div>
  );
};

export default ExplorePege;
