import { useContext } from "react";
import { BeerContext } from "../../providers/BeerContext";
import { StyledMain } from "./styles";

export const BeerList = () => {
  const { beerList, isLoading, currentBeer, setCurrentBeer, setIsOpen } = useContext(BeerContext);

  const findBeer = (id) => {
    const checkClickBeer = beerList.find((foundBeer) => foundBeer.id == id)
    if (checkClickBeer) {
      setCurrentBeer(checkClickBeer)
      setIsOpen(true)
    }

  };
  
  
  return (
    <StyledMain>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {beerList.map((beer) => {
            return (
              <li key={beer.id}>
                <p>{beer.name}</p>
                <img className="beerImg" src={beer.image_url} alt={beer.name} />
                <button onClick={() => findBeer(beer.id)}>
                  Saiba mais
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </StyledMain>
  );
};
