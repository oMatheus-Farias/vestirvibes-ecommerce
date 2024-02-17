import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

//Icons
import { FaGoogle } from "react-icons/fa6";
import { RxEnter } from "react-icons/rx";

//Components
import CustomerButton from "../../components/customer-button/customer-button.component";

//Utilities
import { ScreenSizeContext } from "../../contexts/screen-size.context";
import { AuthContext } from "../../contexts/auth.context";

//Components
import DasktopMenu from "../../components/dasktop-menu/dasktop-menu.component";
import MobileMenu from "../../components/mobile-menu/mobile-menu.component";
import Footer from "../../components/footer/footer.component";
import CustomerInput from "../../components/customer-input/customer-input.component";
import LoadComponent from "../../components/load/load.component";

const schema = z.object({
  email: z.string().email("E-mail inválido."),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres."),
});

type FormData = z.infer<typeof schema>;

const LoginPage = () => {
  const { dasktop } = useContext(ScreenSizeContext);
  const { signIn, sigInWithGoogle, loadingAuth } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data: FormData) => {
    await signIn({
      email: data.email,
      password: data.password,
    });
  };

  const handleGoogleSignIn = async () => {
    await sigInWithGoogle();
  };

  if (loadingAuth) {
    return <LoadComponent />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      {dasktop !== null ? dasktop ? <DasktopMenu /> : <MobileMenu /> : null}
      <div className="w-full h-height-cartMenu flex flex-col items-center justify-center flex-1">
        <section className="max-w-[28.12em] w-full px-4 flex flex-col items-center">
          <h1 className="font-bold text-lg">Entre com a sua conta Google</h1>

          <div className="mt-5 w-full" onClick={handleGoogleSignIn}>
            <CustomerButton
              color="#E74C3C"
              icon={<FaGoogle size={20} color="#FFF" />}
              children="Entrar com o Google"
            />
          </div>

          <p className="font-medium my-5">ou entre com o seu e-mail</p>

          <div className="w-full min-h-[2px] bg-slate-400"></div>
          <form
            className="w-full mt-5 flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label>
              <span className="font-semibold">E-mail</span>
              <CustomerInput
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
                register={register}
                error={errors.email?.message}
                autoComplete="off"
              />
            </label>
            <label>
              <span className="font-semibold">Senha</span>
              <CustomerInput
                type="password"
                name="password"
                placeholder="Digite sua senha"
                register={register}
                error={errors.password?.message}
                autoComplete="off"
              />
            </label>

            <CustomerButton
              color="#212529"
              icon={<RxEnter size={20} color="#FFF" />}
              children="Entrar"
              type="submit"
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
