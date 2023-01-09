import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;

    }

    *,::after,::before {
        box-sizing: inherit;
    }

    body {
        word-break: break-word;
        font-family: 'Lato', sans-serif;
        margin: 0 auto;
        text-align: left;
        background-color: rgb(223, 223, 223);
        text-overflow: clip;
    };


`;