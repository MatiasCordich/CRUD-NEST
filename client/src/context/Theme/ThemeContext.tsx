import React, { createContext, useEffect, useState } from 'react';
import { DarkTheme, LightTheme, Mode, Theme } from '../../styles/themes';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/GlobalStyles';

interface Props {
  children: React.ReactNode
}

interface ThemeContextValue {
  changeMode: (mode: Mode) => void
  mode: Mode
}

const initialValue = {
  changeMode: () => { },
  mode: Mode.Light
}

const ThemeContext = createContext<ThemeContextValue>(initialValue)

export const ThemeProviderContext: React.FC<Props> = ({ children }) => {

  const [theme, setTheme] = useState<Theme>(LightTheme)
  const [mode, setMode] = useState<Mode>(Mode.Light)

  const changeMode = (mode: Mode) => {
    setTheme(mode === Mode.Light ? LightTheme : DarkTheme);
    setMode(mode)
    
  };

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(mode))
    
    const savedTheme = localStorage.getItem('theme')
  }, [theme])


  return (
    <ThemeContext.Provider value={{ mode, changeMode }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
          {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
};

export default ThemeContext;