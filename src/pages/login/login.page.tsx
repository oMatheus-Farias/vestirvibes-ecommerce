import { useContext } from "react";

//Icons
import { FaGoogle } from "react-icons/fa6";
import { RxEnter } from "react-icons/rx";

//Components
import CustomerButton from "../../components/customer-button/customer-button.component";
import { Link } from "react-router-dom";

//Utilities
import { ScreenSizeContext } from "../../contexts/screen-size.context";
import DasktopMenu from "../../components/dasktop-menu/dasktop-menu.component";
import MobileMenu from "../../components/mobile-menu/mobile-menu.component";
import Footer from "../../components/footer/footer.component";

const LoginPage = () => {
  const { dasktop } = useContext(ScreenSizeContext);

  return (
    <div className="flex flex-col min-h-screen">
      {dasktop !== null ? dasktop ? <DasktopMenu /> : <MobileMenu /> : null}

      <div className="w-full min-h-screen flex flex-col items-center justify-center flex-1">
        <section className="max-w-[450px] w-full px-4 flex flex-col items-center">
          <h1 className="font-bold text-lg">Entre com a sua conta Google</h1>

          <div className="mt-5 w-full">
            <CustomerButton
              color="#E74C3C"
              icon={<FaGoogle size={20} color="#FFF" />}
              children="Entrar com o Google"
            />
          </div>

          <p className="font-medium my-5">ou entre com o seu e-mail</p>

          <div className="w-full min-h-[2px] bg-slate-400"></div>
          <form className="w-full mt-5 flex flex-col gap-5">
            <label>
              <span className="font-semibold">E-mail</span>
              <input
                placeholder="Digite seu e-mail"
                className="w-full h-11 px-5 rounded-[0.62em] bg-grayLight"
              />
            </label>
            <label>
              <span className="font-semibold">Senha</span>
              <input
                type="password"
                placeholder="Digite sua senha"
                className="w-full h-11 px-5 rounded-[0.62em] bg-grayLight"
              />
            </label>

            <CustomerButton
              color="#212529"
              icon={<RxEnter size={20} color="#FFF" />}
              children="Entrar"
            />
          </form>
          <Link to="/register" className="mt-4 text-sm">
            Não possui uma conta?{" "}
            <span className="underline">Cadastre-se!</span>
          </Link>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default LoginPage;
