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
}

h2 {
    font-size: 3.2rem;
}

h3 {
    font-size: 2.4rem;
}

h1, h2, h3 {
    font-weight: 700;
}


`