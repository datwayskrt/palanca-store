import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root{
        --primary: #2A3D7D;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    h1, h2, h3{
        font-family: 'Roboto', sans-serif;
    }
`;

export default GlobalStyle;