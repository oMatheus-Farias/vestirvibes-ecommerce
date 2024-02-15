import Category from "../../types/categories.types";

//Component
import CategoryItem from "../category-item/category-item.component";

interface CategoryOverviewProps {
  category: Category;
}

const CategoryOverview = ({ category }: CategoryOverviewProps) => {
  return (
    <>
      <div className="mt-10 md:px-10">
        <h2 className="text-lg font-semibold">{category.displayName}</h2>
      </div>

      <div className="mt-5 gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-10">
        {category.products.slice(0, 4).map((product) => {
          return <CategoryItem key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default CategoryOverview;
