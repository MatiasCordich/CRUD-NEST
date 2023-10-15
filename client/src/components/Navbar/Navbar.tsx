import { BarbieButton, ButtonText, ButtonTheme, ButtonsBox, NavbarBox, NavbarContent, NavbarImg, NavbarTitle } from "./NavbarElements"
import { Mode } from "../../styles/themes"
import { BsMoonFill, BsFillSunFill } from 'react-icons/bs';

interface ThemeToggleProps {
  changeTheme: () => void,
  changeBTheme: () => void
  mode: Mode;
}

const Navbar = ({ changeTheme, changeBTheme, mode }: ThemeToggleProps): JSX.Element => {


  return (
    <NavbarBox>
      <NavbarContent 
        initial={{ opacity: 0, y: "-2rem" }}
        animate={{ opacity: 1, y: "0rem" }}
        transition={{duration: 1, delay: 0.7,}} 
      >
        <NavbarTitle>
          Todo-list
        </NavbarTitle>
        <NavbarImg src="https://img.icons8.com/external-soft-fill-juicy-fish/60/external-task-business-management-soft-fill-soft-fill-juicy-fish-2.png" alt="external-task-business-management-soft-fill-soft-fill-juicy-fish-2" />
      </NavbarContent>
      <ButtonsBox>
        <ButtonTheme 
          initial={{ opacity: 0, y: "-2rem" }}
          animate={{ opacity: 1, y: "0rem" }}
          transition={{duration: 1, delay: 0.9,}} 
          onClick={changeTheme}>
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
        <BarbieButton 
          initial={{ opacity: 0, y: "-2rem" }}
          animate={{ opacity: 1, y: "0rem" }}
          transition={{duration: 1, delay: 1.1,}} 
          onClick={changeBTheme}>
          B
        </BarbieButton>
      </ButtonsBox>

    </NavbarBox>
  )
}

export default Navbar