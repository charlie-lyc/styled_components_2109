import { createGlobalStyle } from 'styled-components'


/**
 * Please do not use @import CSS syntax in createGlobalStyle at this time, 
 * as the CSSOM APIs we use in production do not handle it well. 
 * Instead, we recommend using a library such as react-helmet 
 * to inject a typical <link> meta tag to the stylesheet, 
 * or simply embedding it manually in your index.html <head> section for a simpler app. 
 */
// @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
const GlobalStyles = createGlobalStyle`
    // 

    * {
        box-sizing: border-box;
    }
    
    body {
        background: ${({ theme }) => theme.colors.body};
        color: hsl(192, 100%, 9%);
        font-family: 'Poppins', sans-serif;
        font-size: 1.15em;
        margin: 0;
    }

    p {
        opacity: 0.6;
        line-height: 1.5;
    }

    img {
        max-width: 100%;
    }      
`

export default GlobalStyles