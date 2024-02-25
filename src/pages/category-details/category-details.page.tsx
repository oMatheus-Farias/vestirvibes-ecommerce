import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";

//Icon
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

//Components
import Footer from "../../components/footer/footer.component";
import MobileMenu from "../../components/mobile-menu/mobile-menu.component";
import DasktopMenu from "../../components/dasktop-menu/dasktop-menu.component";
import CategoryItem from "../../components/category-item/category-item.component";
import LoadComponent from "../../components/load/load.component";

//Utilities
import { ScreenSizeContext } from "../../contexts/screen-size.context";
import { db } from "../../config/firebase.config";
import Category from "../../types/categories.types";
import logo from "../../../public/logo.svg";

const CategoryDetailsPage = () => {
  const { dasktop } = useContext(ScreenSizeContext);
  const { id } = useParams();

  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const querySnapshot = await getDocs(
          query(collection(db, "categories"), where("id", "==", id))
        );

        const category = querySnapshot.docs[0]?.data();

        setCategory(category as Category);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, []);

  if (loading) {
    return <LoadComponent />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-grayLight">
      {dasktop !== null ? (
        dasktop ? (
          <DasktopMenu logo={logo} />
        ) : (
          <MobileMenu logo={logo} />
        )
      ) : null}

      <main className="w-full flex-1 px-5">
        <Link to="/">
          <div className="flex gap-2 items-center cursor-pointer mt-10 md:px-10">
            <MdOutlineKeyboardArrowLeft size={18} color="#000" />
            <h2 className="text-lg font-semibold">{category?.displayName}</h2>
          </div>
        </Link>

        <div className="mt-5 gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-10">
          {category?.products.map((product) => {
            return <CategoryItem key={product.id} product={product} />;
          })}
        </div>
      </main>

      <div className="mt-14">
        <Footer />
      </div>
    </div>
  );
};

export default CategoryDetailsPage;
