import { useContext } from "react";
import ThemeContext from "./ThemeContext";


export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error("Los temas deben estar dentro de un Provider")
  return context
}