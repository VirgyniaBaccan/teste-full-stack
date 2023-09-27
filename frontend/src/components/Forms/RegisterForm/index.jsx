import { StyledForm } from "../styles";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./registerSchema";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  // const { createUser } = useContext(UserContext);

  const submit = async (formData) => {
    console.log(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <div className="container">
        <h1>beerpedia</h1>
        <div className="divInputs">
          <label htmlFor="inputName">Nome</label>
          <input
            id="inputName"
            type="text"
            {...register("name")}
            placeholder="Digite seu nome aqui"
          />
          <span className="errors">{errors.name?.message}</span>

          <label htmlFor="inputMail">Email</label>
          <input
            id="inputMail"
            type="email"
            {...register("email")}
            placeholder="Digite seu email aqui"
          />
          <span className="errors">{errors.email?.message}</span>

          <label htmlFor="inputPassword">Senha</label>
          <input
            id="inputPassword"
            type="password"
            {...register("password")}
            placeholder="Digite sua senha aqui"
          />
          <span className="errors">{errors.password?.message}</span>

          <label htmlFor="inputConfirm">Confirme sua senha</label>
          <input
            id="inputConfirm"
            type="password"
            {...register("confirm")}
            placeholder="Confirme sua senha aqui"
          />
          <span className="errors">{errors.confirm?.message}</span>
        </div>
        <div className="divButtons">
          <button className="formButtons" type="submit">
            Cadastrar
          </button>
          <p>ou</p>

          <Link to={"/"} className="formButtons">
            Voltar
          </Link>
        </div>
      </div>
    </StyledForm>
  );
};
