import { useContext } from "react";
import { BeerContext } from "../../providers/BeerContext";
import { StyledModal } from "./styles";

export const Modal = () => {
  const { setIsOpen, currentBeer } = useContext(BeerContext);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <StyledModal role="dialog">
        <div className="modalContainer">
          <div className="divBtnClose">
            <button onClick={() => closeModal()}>X</button>
          </div>
          <div className="contentModal">
            <div className="divImg">
              <img src={currentBeer.image_url} alt={currentBeer.name} />
            </div>
            <div className="divDescription">
              <h2>{currentBeer.name}</h2>
              <p className="description">{currentBeer.description}</p>
              <span>PH: {currentBeer.ph}</span>
              <span>
                Volume: {currentBeer.volume.value}
                {currentBeer.volume.unit}
              </span>
              <span>abv: {currentBeer.abv}</span>
            </div>
          </div>
        </div>
      </StyledModal>
    </>
  );
};
