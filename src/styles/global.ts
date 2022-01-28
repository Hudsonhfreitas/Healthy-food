import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary: #BADC58;
    --text-primary: #1D164D;
    --text-secondary: #9E9BAF;

    --white: #FFFFFF;
}

html {
    font-size: 62.5%;

    @media screen and (max-width: 1200px) {
        font-size: 55.5%;
    }
    @media screen and (max-width: 950px) {
        font-size: 50%;
    }
}

body, input, textarea, button {
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
}

button {
    cursor: pointer;
}

a {
    color: inherit;
    text-decoration: none;
}

h1 {
    font-size: 4.8rem;
    line-height: 140%;

    @media (max-width: 850px) {
        font-size: 3.4rem
    }
}

h2 {
    font-size: 3.2rem;

    @media (max-width: 850px) {
        font-size: 2rem
    }
}

h3 {
    font-size: 2.4rem;
}

h1, h2, h3 {
    font-weight: 700;
}


`