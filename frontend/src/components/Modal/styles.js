import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  .modalContainer {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 90%;
    max-width: 60vw;
    height: 60vh;
    background-color: var(--color-grey-0);
    padding-bottom: 1rem;
    border-radius: 5px;
    border: 2px solid var(--color-grey-4);
  }

  .divBtnClose {
    display: flex;
    position: absolute;
    right: 0;
    width: 1.25rem;
    height: 1.25rem;
    padding: 1rem;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 3.125rem;
    height: 12.5rem;
  }

  .contentModal {
    display: flex;
    width: 90%;
    height: 100%;
    align-items: flex-start;
    gap: 7rem;
    padding: 1rem;
  }

  .divImg {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 30%;
    height: 100%;
  }

  .divDescription {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    height: 95%;
    gap: 2rem;
  }

  .description {
    display: flex;
    width: 100%;
    max-height: 40%;
    overflow: auto;
  }

  .moreInfosBeer {
    display: flex;
    width: 95%;
    height: 3.125rem;
    padding: 1rem;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 48rem) {
    .modalContainer {
      overflow: auto;
    }
    .contentModal {
      width: 90%;
      height: 100%;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
    }
  }
`;
