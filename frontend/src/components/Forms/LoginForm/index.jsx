import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./loginSchema";
import { StyledForm } from "../styles";
import { Link } from "react-router-dom";
export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  return (
    <StyledForm>
      <div className="container">
        <h1>beerpedia</h1>
        <div className="divInputs">
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
        </div>
        <div className="divButtons">
          <Link to={"/dashboard"} className="formButtons" type="submit">
            Entrar
          </Link>
          <p>ou</p>
          <Link to={"/register"} className="formButtons">
            Cadastrar-se
          </Link>
        </div>
      </div>
    </StyledForm>
  );
};
