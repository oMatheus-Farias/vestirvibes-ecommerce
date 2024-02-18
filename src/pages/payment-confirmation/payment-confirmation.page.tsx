import { useContext, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

//Compopnents
import DasktopMenu from "../../components/dasktop-menu/dasktop-menu.component";
import MobileMenu from "../../components/mobile-menu/mobile-menu.component";
import Footer from "../../components/footer/footer.component";
import CustomerButton from "../../components/customer-button/customer-button.component";

//Utilitie
import { ScreenSizeContext } from "../../contexts/screen-size.context";
import { CartContext } from "../../contexts/cart.context";

//Icon
import { FaHome } from "react-icons/fa";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const PaymentConfirmationPage = () => {
  const { dasktop } = useContext(ScreenSizeContext);
  const { clearProducts } = useContext(CartContext);

  const [searchParams] = useSearchParams();
  const status = searchParams.get("success");
  const isCanceled = searchParams.get("canceled") === "true";

  const navigate = useNavigate();

  const handleNavigateHomePageClick = () => {
    navigate("/");
  };

  useEffect(() => {
    if (status === "true") {
      clearProducts();
    }
  }, [status]);

  return (
    <div className="flex flex-col min-h-screen bg-grayLight">
      {dasktop !== null ? dasktop ? <DasktopMenu /> : <MobileMenu /> : null}

      <div className="w-full h-height-cartMenu flex flex-col items-center justify-center flex-1 gap-5 px-5 text-center">
        {status === "true" && (
          <>
            <AiOutlineCheckCircle size={120} color="#198754" />
            <p>Sua compra foi finalizada com sucesso!</p>
          </>
        )}

        {(status === "false" || isCanceled) && (
          <>
            <AiOutlineCloseCircle size={120} color="#FF6A6A" />
            <p>
              Ocorreu um erro ao finalizar sua compra. Por favor, tente
              novamente.
            </p>
          </>
        )}

        <div
          className="w-full max-w-[26.25em]"
          onClick={handleNavigateHomePageClick}
        >
          <CustomerButton
            color="#E74C3C"
            icon={<FaHome size={18} color="#FFF" />}
            children="Ir para a página inicial"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PaymentConfirmationPage;
