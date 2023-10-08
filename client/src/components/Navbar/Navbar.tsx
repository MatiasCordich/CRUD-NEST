import { ButtonTheme, NavbarBox } from "./NavbarElements"
import { HiMoon } from 'react-icons/hi';
import { FaSun } from 'react-icons/fa';


interface ThemeToggleProps {
  changeTheme: () => void
}

let savedTheme = localStorage.getItem('theme')


const Navbar = ({ changeTheme }: ThemeToggleProps) => {




  return (
    <NavbarBox>
      <ButtonTheme onClick={changeTheme}>
        <p>
          Modo
        </p>
      </ButtonTheme >
    </NavbarBox>
  )
}

export default Navbar