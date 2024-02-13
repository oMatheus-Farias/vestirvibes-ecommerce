import { useContext } from "react";

//Utilities
import { ScreenSizeContext } from "../../contexts/screen-size.context";

//Icon
import { RxEnter } from "react-icons/rx";

//Components
import DasktopMenu from "../../components/dasktop-menu/dasktop-menu.component";
import MobileMenu from "../../components/mobile-menu/mobile-menu.component";
import CustomerButton from "../../components/customer-button/customer-button.component";
import Footer from "../../components/footer/footer.component";
import { Link } from "react-router-dom";

const RegisterPege = () => {
  const { dasktop } = useContext(ScreenSizeContext);

  return (
    <div className="flex flex-col min-h-screen">
      {dasktop !== null ? dasktop ? <DasktopMenu /> : <MobileMenu /> : null}

      <div className="w-full min-h-screen flex flex-col items-center justify-center flex-1">
        <section className="max-w-[450px] w-full px-4 flex flex-col items-center">
          <h1 className="font-bold text-lg">Crie sua conta</h1>
          <div className="w-full min-h-[2px] my-5 bg-slate-400"></div>

          <form className="w-full flex flex-col gap-5">
            <label>
              <span className="font-semibold">Nome</span>
              <input
                placeholder="Digite seu nome"
                className="w-full h-11 px-5 rounded-[0.62em] bg-grayLight"
              />
            </label>
            <label>
              <span className="font-semibold">Sobrenome</span>
              <input
                placeholder="Digite seu sobrenome"
                className="w-full h-11 px-5 rounded-[0.62em] bg-grayLight"
              />
            </label>
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
                placeholder="Digite sua senha"
                className="w-full h-11 px-5 rounded-[0.62em] bg-grayLight"
              />
            </label>
            <label>
              <span className="font-semibold">Confirmação de senha</span>
              <input
                placeholder="Confirme sua senha"
                className="w-full h-11 px-5 rounded-[0.62em] bg-grayLight"
              />
            </label>

            <CustomerButton
              color="#E74C3C"
              icon={<RxEnter />}
              children="Criar conta"
            />
          </form>
          <Link to="/login" className="mt-4 text-sm">
            Já possui uma conta? <span className="underline">Faça Login!</span>
          </Link>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default RegisterPege;
