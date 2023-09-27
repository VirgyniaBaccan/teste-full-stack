import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

button {
    cursor: pointer;
    background: transparent;
    border: none;
}

a {
    text-decoration: none;
    color: unset;
}

ul, ol {
    list-style: none;
}

input {
    border-radius: 0;
    border: none;
    background: transparent; 
}

img {
    max-width: 100%;
}

body {
    display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
    height: 100vh;
    width: 97.9vw;
    font-family: var(--font-primary);
    background-color: var(--color-grey-0);
};
`;
