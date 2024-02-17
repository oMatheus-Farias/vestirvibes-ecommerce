import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

//Utilities
import { ScreenSizeContext } from "../../contexts/screen-size.context";
import { AuthContext } from "../../contexts/auth.context";

//Icon
import { RxEnter } from "react-icons/rx";

//Components
import DasktopMenu from "../../components/dasktop-menu/dasktop-menu.component";
import MobileMenu from "../../components/mobile-menu/mobile-menu.component";
import CustomerButton from "../../components/customer-button/customer-button.component";
import Footer from "../../components/footer/footer.component";
import CustomerInput from "../../components/customer-input/customer-input.component";
import LoadComponent from "../../components/load/load.component";

const schema = z.object({
  name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres."),
  lastName: z.string().min(3, "O sobrenome deve ter no mínimo 3 caracteres."),
  email: z.string().email("E-mail inválido."),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres."),
});

type FormData = z.infer<typeof schema>;

const RegisterPage = () => {
  const { dasktop } = useContext(ScreenSizeContext);
  const { signUp, loadingAuth } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data: FormData) => {
    await signUp({
      firstName: data.name,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    });
  };

  if (loadingAuth) {
    return <LoadComponent />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      {dasktop !== null ? dasktop ? <DasktopMenu /> : <MobileMenu /> : null}

      <div className="w-full h-height-cartMenu flex flex-col items-center justify-center mt-5 flex-1">
        <section className="max-w-[28.12em] w-full px-4 flex flex-col items-center">
          <h1 className="font-bold text-lg">Crie sua conta</h1>
          <div className="w-full min-h-[2px] my-5 bg-slate-400"></div>

          <form
            className="w-full flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label>
              <span className="font-semibold">Nome</span>
              <CustomerInput
                type="text"
                name="name"
                placeholder="Digite seu nome"
                register={register}
                error={errors.name?.message}
                autoComplete="off"
              />
            </label>
            <label>
              <span className="font-semibold">Sobrenome</span>
              <CustomerInput
                type="text"
                name="lastName"
                placeholder="Digite seu sobrenome"
                register={register}
                error={errors.lastName?.message}
                autoComplete="off"
              />
            </label>
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
              color="#E74C3C"
              icon={<RxEnter />}
              children="Criar conta"
              type="submit"
            />
          </form>
          <Link to="/login" className="mt-4 text-sm">
            Já possui uma conta? <span className="underline">Faça Login!</span>
          </Link>
        </section>
      </div>

      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default RegisterPage;
