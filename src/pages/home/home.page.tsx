import { useContext } from "react";

//Utilities
import { ScreenSizeContext } from "../../contexts/screen-size.context";
import { CategoriesContext } from "../../contexts/categories.context";

//Components
import DasktopMenu from "../../components/dasktop-menu/dasktop-menu.component";
import MobileMenu from "../../components/mobile-menu/mobile-menu.component";
import Footer from "../../components/footer/footer.component";
import Categories from "../../components/categories/categories.component";
import LoadComponent from "../../components/load/load.component";

const HomePage = () => {
  const { dasktop } = useContext(ScreenSizeContext);
  const { categories, loadingGetCategories } = useContext(CategoriesContext);

  if (loadingGetCategories) {
    return <LoadComponent />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      {dasktop !== null ? dasktop ? <DasktopMenu /> : <MobileMenu /> : null}
      <div className="w-full h-64">
        <img
          src="banner.png"
          alt="Banner VestirVibes"
          className="w-full h-full object-cover"
        />
      </div>

      <main className="px-4 flex-1 flex flex-col items-center sm:px-6">
        <div className="mt-10 flex items-center gap-4 w-full overflow-auto max-w-[62.5em] [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => {
            return (
              <Categories
                key={category.id}
                imageUrl={category.imageUrl}
                name={category.displayName}
              />
            );
          })}
        </div>

        <h1 className="text-center text-black font-bold text-2xl mt-10">
          Quem Somos?
        </h1>

        <section className="mt-10 flex flex-col gap-10 w-full justify-between max-w-[62.5em] md:flex-row">
          <div>
            <h2 className="text-xl font-medium">VestVibes</h2>

            <p className="mt-2 max-w-[31.25em]">
              Explore o universo da moda conosco na VestVibes - sua loja online
              para estilo e elegância. Descubra coleções modernas e exclusivas,
              escolha entre roupas casuais e peças para ocasiões especiais.
              Garantimos uma experiência de compra segura e fácil, entregando
              moda de alta qualidade diretamente à sua porta. Reinvente seu
              estilo conosco - seja bem-vindo ao seu novo destino de moda
              online!
            </p>

            <button className="mt-4 bg-primary px-2 py-1 rounded-[0.62em] font-bold">
              Explorar
            </button>
          </div>

          <div className="max-w-[18.75em] w-full mx-auto md:mx-0">
            <img
              src="groupImages.png"
              alt="Group of Images"
              className="w-full"
            />
          </div>
        </section>
      </main>
      <div className="mt-14">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
