import { useContext } from "react";

//Components
import DasktopMenu from "../../components/dasktop-menu/dasktop-menu.component";
import MobileMenu from "../../components/mobile-menu/mobile-menu.component";
import Footer from "../../components/footer/footer.component";
import CartItem from "../../components/cart-item/cart-tem.component";
import CustomerButton from "../../components/customer-button/customer-button.component";

//Icon
import { BiSolidCartAdd } from "react-icons/bi";

//Utilities
import { ScreenSizeContext } from "../../contexts/screen-size.context";
import { CartContext } from "../../contexts/cart.context";

const CheckoutPage = () => {
  const { dasktop } = useContext(ScreenSizeContext);
  const { products, productsTotalPrice } = useContext(CartContext);

  return (
    <div className="flex flex-col min-h-screen bg-grayLight">
      {dasktop !== null ? dasktop ? <DasktopMenu /> : <MobileMenu /> : null}

      <div className="w-full h-height-cartMenu flex flex-col items-center justify-center flex-1 px-4">
        {products.length > 0 ? (
          <>
            <div className="w-full max-w-[610px] flex flex-col gap-5">
              <h1 className="text-xl font-bold text-center mt-14">Checkout</h1>

              <div className="flex flex-col gap-4 w-full">
                {products.map((product) => {
                  return <CartItem key={product.id} product={product} />;
                })}
              </div>

              <span className="mr-auto text-lg font-semibold">
                Total: R${productsTotalPrice.toFixed(2)}
              </span>

              <CustomerButton
                color={"#E74C3C"}
                icon={<BiSolidCartAdd size={20} color="#FFF" />}
                children={"Finalizar compra"}
              />
            </div>
          </>
        ) : (
          <p className="font-semibold text-lg">Seu carrinho está vazio!</p>
        )}
      </div>

      <div className="mt-14">
        <Footer />
      </div>
    </div>
  );
};

export default CheckoutPage;
