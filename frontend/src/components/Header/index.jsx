import { Link } from "react-router-dom";
import { StyledHeader } from "./styles";

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <div>
          <h1>beerpedia</h1>
          <Link to={"/"} className="buttonLogout">
            Sair
          </Link>
        </div>
      </StyledHeader>
    </>
  );
};
