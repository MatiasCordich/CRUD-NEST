import { useEffect, useState } from "react"
import { ButtonTheme, NavbarBox } from "./NavbarElements"
import { Mode } from "../../styles/themes"
import { BsMoonFill, BsFillSunFill } from 'react-icons/bs';

interface ThemeToggleProps {
  changeTheme: () => void,
  mode: Mode;
}

const Navbar = ({ changeTheme, mode }: ThemeToggleProps) => {


  return (
    <NavbarBox>
      <ButtonTheme onClick={changeTheme}>
        {mode === Mode.Light 
        ? <p>
          <BsMoonFill/>
        </p>
        : <BsFillSunFill/>
        }
      </ButtonTheme >
    </NavbarBox>
  )
}

export default Navbar