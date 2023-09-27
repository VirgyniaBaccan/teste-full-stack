import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 6rem;
  width: 100vw;
  height: 100%;
  padding-bottom: 2rem;
  padding-top: 5rem;
  background-color: var(--color-grey-0);

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
    flex-wrap: wrap;
    width: 100%;
    max-width: 62.5rem;
    gap: 2.3rem;
  }

  img {
    width: 3.125rem;
    height: 11.25rem;
  }

  p {
    font-weight: bolder;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0.9375rem;
    height: 18rem;
    width: 13.9rem;
    background-color: var(--color-primary);
    border: 2px solid var(--color-grey-4);
    color: var(--color-grey-0);
    border-radius: 0.75rem;
  }

  button {
    display: flex;
    justify-content: center;
    color: var(--color-grey-0);
    font-weight: 600;
  }

  button:hover {
    text-decoration: underline;
  }
`;
