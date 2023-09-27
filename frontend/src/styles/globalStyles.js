import { createGlobalStyle } from "styled-components";
import beerImg from "../assets/beer.jpg";

export const GlobalStyle = createGlobalStyle`

    :root {
    --font-primary: 'Inter', sans-serif;
	--color-primary: #ff4500;
	--color-secondary: #ff8c00;
	--color-grey-4: #121214ff;
	--color-grey-1: #868e96ff;
	--color-grey-0: #f8f9faff;
	--color-sucess: #3fe864ff;
	--color-negative: #e83f5bff;
}

body {
	background-image: url(${beerImg});
  	background-size: cover;
	height: 100%;
  	background-position: center;
}
`;
