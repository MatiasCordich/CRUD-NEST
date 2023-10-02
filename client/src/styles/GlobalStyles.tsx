import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root{
        // FONTS
        --primary: 'Inter', sans-serif;
        --title-font: 'Montserrat', sans-serif;
        --text-font: 'Raleway', sans-serif;

        // COLOR

        --white: #F1F1F1;
        --green: #59CE8F;
        --black: #222222
    }


  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.8rem;
    font-family: var(--primary);
    background-color: #fff;
  }

  h1,h2,h3,h4{
    font-family: var(--title-font);
  }

  p{
    font-family: var(--text-font);
    font-size: 1.8rem;
    font-weight: 500;
  }

  button{
    border: none;
    background: none;
    font-family: var(--primary);
    font-size: 1.6rem;
    text-transform: uppercase;
    letter-spacing: .1rem;
    font-weight: 500;
  }

  label{
    font-weight: 600;
  }

  input, textarea{
    outline: none;
    border: none;
    padding: 1rem;
    font-size: 1.8rem;
    font-family: var(--text-font);
    font-weight: 500;
  }

  input[type="checkbox"]{
    width: 3rem;
  }

`;

export default GlobalStyle;