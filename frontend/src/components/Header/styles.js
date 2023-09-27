import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15vh;
  padding: 2rem;
  background-color: var(--color-grey-4);
  border-bottom: 0.1875rem solid var(--color-secondary);
  position: fixed;
  right: 0;
  top: 0;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 62.5rem;
  }

  h1 {
    color: var(--color-primary);
  }

  button {
    background-color: var(--color-primary);
    padding: 6px;
    width: 100px;
    font-weight: bolder;
    border-radius: 12px;
    color: var(--color-grey-0);
  }
  button:hover {
    background-color: var(--color-secondary);
  }

  @media (max-width: 25rem) {
    button {
      width: max-content;
    }
  }
`;
