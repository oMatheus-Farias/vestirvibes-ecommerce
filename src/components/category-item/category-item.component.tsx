import { useContext } from "react";

//Utilities
import Product from "../../types/product.types";
import { CartContext } from "../../contexts/cart.context";

//Icon
import { BiSolidCartAdd } from "react-icons/bi";

interface CategoryItemProps {
  product: Product;
}

const CategoryItem = ({ product }: CategoryItemProps) => {
  const { addProductToCart } = useContext(CartContext);

  const handleAddToCartClick = () => {
    addProductToCart(product);
  };

  return (
    <section
      className="flex flex-col items-center w-full"
      data-aos="flip-right"
      data-aos-duration="800"
    >
      <div className="min-w-[18.7em] max-w-[18.7em] shadow-lg relative">
        <div className="w-full rounded-t-[0.62em] overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full min-h-[23.7em] max-h-[23.7em] object-cover"
          />
        </div>

        <div className="bg-white w-full flex justify-between px-3 py-2 text-sm font-medium rounded-b-[0.62em]">
          <h3>{product.name}</h3>
          <span>{`R$ ${product.price.toFixed(2)}`}</span>
        </div>

        <div
          className="absolute top-2 right-2 bg-slate-600 p-2 rounded flex justify-center items-center cursor-pointer"
          title="Adicionar ao carrinho"
        >
          <button onClick={handleAddToCartClick}>
            <BiSolidCartAdd size={18} color="#FFF" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryItem;
