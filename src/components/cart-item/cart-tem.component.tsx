import { useContext } from "react";

//Utilities
import CartProduct from "../../types/cart.types";
import { CartContext } from "../../contexts/cart.context";

//Icon
import { MdDeleteForever } from "react-icons/md";

interface CartItemProps {
  product: CartProduct;
}

const CartItem = ({ product }: CartItemProps) => {
  const {
    increaseProductQuantity,
    decreaseProductQuantity,
    removeProductFromCart,
  } = useContext(CartContext);

  const handleIncreaseClick = () => {
    increaseProductQuantity(product.id);
  };

  const handleDecreaseClick = () => {
    decreaseProductQuantity(product.id);
  };

  const handleRemoveClick = () => {
    removeProductFromCart(product.id);
  };

  return (
    <section className="w-full flex gap-2">
      <div className="min-w-[140px] max-w-[140px] min-h-[180px] max-h-[180px]">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover rounded-[10px]"
        />
      </div>

      <div className="flex flex-col gap-1 font-semibold text-black relative">
        <p>{product.name}</p>
        <p>R${product.price}</p>

        <div className="flex gap-3">
          <button onClick={handleDecreaseClick}>-</button>
          <span>{product.quantity}</span>
          <button onClick={handleIncreaseClick}>+</button>
        </div>

        <button
          title="Remover do carrinho"
          className="bg-slate-600 absolute bottom-1 left-0 p-2 rounded"
          onClick={handleRemoveClick}
        >
          <MdDeleteForever color="#FFF" size={16} />
        </button>
      </div>
    </section>
  );
};

export default CartItem;
