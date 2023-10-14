import React, { createContext, useEffect, useState } from 'react';
import { BarbieTheme, DarkTheme, LightTheme, Mode, Theme } from '../../styles/themes';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/GlobalStyles';
import { FontStyles } from '../../styles/FontStyle';

interface Props {
  children: React.ReactNode
}

interface ThemeContextValue {
  changeMode: (mode: Mode) => void
  changeBarbieMode: (mode: Mode) => void
  mode: Mode
}

const initialValue = {
  changeMode: () => { },
  changeBarbieMode: () => { },
  mode: Mode.Light
}

const ThemeContext = createContext<ThemeContextValue>(initialValue)

export const ThemeProviderContext: React.FC<Props> = ({ children }) => {

  const [theme, setTheme] = useState<Theme>(LightTheme)
  const [mode, setMode] = useState<Mode>(Mode.Light)

  const changeMode = (mode: Mode) => {
    setTheme(mode === Mode.Light ? LightTheme : DarkTheme);
    setMode(mode)
    localStorage.setItem("theme", mode)
  };

  const changeBarbieMode = (mode: Mode) => {
    setTheme(BarbieTheme)
    setMode(Mode.Barbie)
    localStorage.setItem("theme", mode)
  }

  return (
    <ThemeContext.Provider value={{ mode, changeMode, changeBarbieMode }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <FontStyles/>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
};

export default ThemeContext;