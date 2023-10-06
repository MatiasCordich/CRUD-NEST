import { createGlobalStyle } from 'styled-components';
import { ThemeProps } from './themes';

type GlobalThemeProps = {
  theme: ThemeProps
}

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
    background-color: ${({ theme }: GlobalThemeProps) => theme.background};
  }

  h1,h2,h3,h4{
    font-family: var(--title-font);
  }

  p{
    font-family: var(--text-font);
    color: ${({ theme }: GlobalThemeProps) => theme.text};
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

export default GlobalStyle;