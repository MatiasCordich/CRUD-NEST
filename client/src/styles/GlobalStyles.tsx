import { createGlobalStyle, withTheme } from 'styled-components';

const GlobalStyle = createGlobalStyle` 
    :root{
        // FONTS
        --primary: 'Inter', sans-serif;
        --title-font: 'Montserrat', sans-serif;
        --text-font: 'Raleway', sans-serif;

        // COLOR
        --white-p: #fff;
        --white: #F1F1F1;
        --green: #59CE8F;
        --black: #222222;

        // DARK THEME
        --black-box: #222222;
        --black-background: #191717;
        --black-line: #454545;

        // BARBIE THEME
        --pink-b: #FDE5EC;
        --pink-l: #F78CA2;
        --pink-xl: #FF4B91;
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
    background-color: ${({ theme }) => theme.colors?.backgroundBody};
    transition-duration: .6s;
  }

  h1,h2,h3,h4{
    font-family: var(--title-font);
    color: ${({ theme }) => theme.colors?.title};
  }

  p{
    font-family: var(--text-font);
    color:  ${({ theme }) => theme.colors.text};
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
    cursor: pointer;
  }

  label{
    font-weight: 600;
  }

  textarea{
    resize: none;
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

  ::-webkit-scrollbar{
    display: none;
  }

`;

export default withTheme(GlobalStyle);