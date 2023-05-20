import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    }
    ol,ul,li {
        list-style: none;
    }
    a{
        text-decoration: none;
    }
`
export default GlobalStyle;