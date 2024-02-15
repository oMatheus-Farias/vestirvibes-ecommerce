import { useNavigate } from "react-router-dom";

//Utilities
import Category from "../../types/categories.types";

interface CategoriesProps {
  category: Category;
}

const Categories = ({ category }: CategoriesProps) => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate(`/category/${category.id}`);
  };

  return (
    <div onClick={handleExploreClick} className="mx-auto cursor-pointer">
      <img
        src={category.imageUrl}
        alt={category.name}
        className="min-w-20 max-w-20 h-20 object-cover rounded-full"
      />

      <h3 className="text-center">{category.displayName}</h3>
    </div>
  );
};

export default Categories;
