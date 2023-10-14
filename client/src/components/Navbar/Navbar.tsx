import { useEffect, useState } from "react"
import { BarbieButton, ButtonText, ButtonTheme, ButtonsBox, NavbarBox, NavbarContent, NavbarImg, NavbarTitle } from "./NavbarElements"
import { Mode } from "../../styles/themes"
import { BsMoonFill, BsFillSunFill } from 'react-icons/bs';

interface ThemeToggleProps {
  changeTheme: () => void,
  changeBTheme: () => void
  mode: Mode;
}

const Navbar = ({ changeTheme, changeBTheme, mode }: ThemeToggleProps) => {


  return (
    <NavbarBox>
      <NavbarContent>
        <NavbarTitle>
          Todo-list
        </NavbarTitle>
        <NavbarImg src="https://img.icons8.com/external-soft-fill-juicy-fish/60/external-task-business-management-soft-fill-soft-fill-juicy-fish-2.png" alt="external-task-business-management-soft-fill-soft-fill-juicy-fish-2" />
      </NavbarContent>
      <ButtonsBox>
        <ButtonTheme onClick={changeTheme}>
          {mode === Mode.Light
            ?
            <ButtonText>
              <BsMoonFill style={{ color: "#222222" }} />
              Dark Mode
            </ButtonText>
            :
            <ButtonText>
              <BsFillSunFill style={{ color: "#F1F1F1" }} />
              Light Mode
            </ButtonText>
          }
        </ButtonTheme >
        <BarbieButton onClick={changeBTheme}>
          B
        </BarbieButton>
      </ButtonsBox>

    </NavbarBox>
  )
}

export default Navbar