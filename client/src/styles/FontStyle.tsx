import { createGlobalStyle } from "styled-components";
import BarbieTff from '../fonts/Bartex.ttf'

export const FontStyles = createGlobalStyle`

@font-face {
    font-family: "Barbie";
    src: url(${BarbieTff}) format("truetype");
  }
`