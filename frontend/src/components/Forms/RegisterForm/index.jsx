import { StyledForm } from "../style";
import { Link } from "react-router-dom";

// const submit = async (formData) => {
//   await userLogin(formData);
//   console.log(formData);
// };

export const RegisterForm = () => {
  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <div className="container">
        <h1>beerpedia</h1>
        <div className="divInputs">
          <label htmlFor="inputName">Nome</label>
          <input
            id="inputName"
            type="text"
            placeholder="Digite seu nome aqui"
          />
          <label htmlFor="inputMail">Email</label>
          <input
            id="inputMail"
            type="email"
            placeholder="Digite seu email aqui"
          />
          <label htmlFor="inputPassword">Senha</label>
          <input
            id="inputPassword"
            type="password"
            placeholder="Digite sua senha aqui"
          />
          <label htmlFor="inputConfirm">Confirme sua senha</label>
          <input
            id="inputConfirm"
            type="password"
            placeholder="Confirme sua senha aqui"
          />
        </div>
        <div className="divButtons">
          <button className="formButtons" type="submit">Cadastrar</button>
          <p>ou</p>

          <Link to={"/"} className="formButtons">Voltar</Link>
        </div>
      </div>
    </StyledForm>
  );
};
