import { useContext } from "react";
import { BeerContext } from "./providers/BeerContext";
import { RoutesMain } from "./routes/RoutesMain";
import { GlobalReset } from "./styles/reset";
import { GlobalStyle } from "./styles/globalStyles";

function App() {
  const { isLoading } = useContext(BeerContext);

  return (
    <>
      <GlobalReset />
      <GlobalStyle />
      {isLoading ? <p>Carregando...</p> : <RoutesMain />}
    </>
  );
}

export default App;
