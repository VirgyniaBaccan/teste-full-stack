import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  color: var(--color-grey-0);

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 1rem;
    padding-bottom: 1rem;
    gap: 2rem;
    width: 90%;
    max-width: 34.375rem;
    height: max-content;
    background-color: var(--color-grey-4);
    border-radius: 12px;
    margin: 2rem;
  }

  h1 {
    color: var(--color-primary);
  }

  .divInputs {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 90%;
    gap: 0.8rem;
  }

  input {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: var(--color-grey-0);
    height: 2.5rem;
    width: 100%;
    text-indent: .625rem;
    border-radius: .3125rem;
  }

  .divButtons {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    gap: 1.5rem;
  }

  .formButtons {
    display: flex;
    justify-content: center;
    padding: .625rem;
    width: 18.75rem;
    background-color: var(--color-primary);
    border-radius: .3125rem;
    color: var(--color-grey-0);
    font-weight: bolder;
  }

  .formButtons:hover {
    background-color: var(--color-secondary);
  }

  .errors {
    font-size: .75rem;
    color: var(--color-negative);
  }
`;
