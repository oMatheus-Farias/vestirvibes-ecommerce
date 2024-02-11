import { IoCartOutline } from "react-icons/io5";

const Cart = () => {
  return (
    <>
      <div className="cursor-pointer relative">
        <IoCartOutline size={30} color="#FFF" />

        <div className="absolute w-4 h-4 bg-black rounded-full bottom-[-6px] right-[-6px] flex justify-center items-center text-white text-xs">
          5
        </div>
      </div>
    </>
  );
};

export default Cart;
