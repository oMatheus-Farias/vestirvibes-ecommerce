//Utilities
import CartProduct from "../../types/cart.types";

//Icon
import { MdDeleteForever } from "react-icons/md";

interface CartItemProps {
  product: CartProduct;
}

const CartItem = ({ product }: CartItemProps) => {
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
          <button>-</button>
          <span>{product.quantity}</span>
          <button>+</button>
        </div>

        <button
          title="Remover do carrinho"
          className="bg-slate-600 absolute bottom-1 left-0 p-2 rounded"
        >
          <MdDeleteForever color="#FFF" size={16} />
        </button>
      </div>
    </section>
  );
};

export default CartItem;
