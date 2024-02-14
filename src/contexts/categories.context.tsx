import { createContext, ReactNode, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

//Utilities
import Category from "../types/categories.types";
import { db } from "../config/firebase.config";

interface CategoriesContextData {
  categories: Category[];
  loadingGetCategories: boolean;
}

export const CategoriesContext = createContext({} as CategoriesContextData);

const CategoriesProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loadingGetCategories, setLoadingGetCategories] = useState(true);

  useEffect(() => {
    const categoriesFromFirestore: Category[] = [];

    const fetchCategories = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "categories"));

        querySnapshot.forEach((doc: any) => {
          categoriesFromFirestore.push(doc.data());
        });

        setCategories(categoriesFromFirestore);
      } catch (err) {
        console.log(err);
      } finally {
        setLoadingGetCategories(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories, loadingGetCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
