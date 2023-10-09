import { ButtonTheme, NavbarBox } from "./NavbarElements"

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