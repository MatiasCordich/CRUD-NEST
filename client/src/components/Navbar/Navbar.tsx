import { NavbarBox } from "./NavbarElements"
import { HiMoon } from 'react-icons/hi';
import { FaSun } from 'react-icons/fa';


interface ThemeToggleProps {
  changeTheme: () => void
}


const Navbar = ({ changeTheme } : ThemeToggleProps) => {
  return (
    <NavbarBox>
        <label htmlFor="checkbox" className="switch">
        <input
          id="checkbox"
          type="checkbox"
          onClick={changeTheme}
          onChange={() => false}
          checked={window.localStorage.getItem('theme') === 'light'}
        />
        <div className="slider round">
          {window.localStorage.getItem('theme') !== 'light' ? (
            <>
              <HiMoon style={{ marginLeft: '6.3px', height: '10px' }} />
            </>
          ) : (
            <>
              <FaSun size={0} style={{ marginLeft: '41px', height: '10px' }} />
            </>
          )}
        </div>
      </label>
    </NavbarBox>
  )
}

export default Navbar