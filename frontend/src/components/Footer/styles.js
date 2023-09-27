import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 5vh;
  background-color: black;

  p {
    color: var(--color-grey-0);
  }

  @media (max-width: 62.5rem) {
    position: fixed;
    right: 0;
    bottom: 0;
  }
`;
