import { useContext } from "react";

//Utilities
import { ScreenSizeContext } from "../../contexts/screen-size.context";
import { CategoriesContext } from "../../contexts/categories.context";

//Components
import DasktopMenu from "../../components/dasktop-menu/dasktop-menu.component";
import MobileMenu from "../../components/mobile-menu/mobile-menu.component";
import Footer from "../../components/footer/footer.component";
import CategoryOverview from "../../components/category-overview/category-overview.component";
import LoadComponent from "../../components/load/load.component";

const ExplorePege = () => {
  const { dasktop } = useContext(ScreenSizeContext);
  const { categories } = useContext(CategoriesContext);

  if (!categories) {
    return <LoadComponent />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-grayLight">
      {dasktop !== null ? dasktop ? <DasktopMenu /> : <MobileMenu /> : null}

      <main className="w-full flex-1 px-5">
        {categories.map((category) => {
          return <CategoryOverview key={category.id} category={category} />;
        })}
      </main>

      <div className="mt-14">
        <Footer />
      </div>
    </div>
  );
};

export default ExplorePege;
