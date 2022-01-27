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
`