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
    height: max-content;
    max-height: 100vh;
    background-color: var(--color-grey-0);
    padding-bottom: 1rem;
    /* background-color: green; */
  }

  .divBtnClose {
    display: flex;
    position: absolute;
    right: 0;
    width: 20px;
    height: 20px;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    /* background-color: yellow; */
  }

  img {
    width: 50px;
    height: 200px;
  }

  .contentModal {
    display: flex;
    width: 90%;
    height: 100%;
    align-items: flex-start;
    gap: 7rem;
    padding: 1rem;
  }

  .divNameImg {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 30%;
    height: 100%;
    /* gap: 1.5rem; */
    /* background-color: blue; */
  }

  .divDescription {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    height: 95%;
    gap: 2rem;
  }

  .moreInfosBeer {
    display: flex;
    width: 95%;
    height: 50px;
    padding: 1rem;
    align-items: center;
    justify-content: space-between;
  }
`;
