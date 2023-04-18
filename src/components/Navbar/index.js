import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onChange = () => {
        toggleTheme()
      }

      return isDarkTheme ? (
        <div className="NavbarContainer dark">
          <img
            className="img2"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
          />
          <ul className="content-container1">
            <Link to="/" className="Link2">
              <li>Home</li>
            </Link>
            <Link to="/about" className="Link2">
              <li>About</li>
            </Link>
          </ul>
          <button type="button" data-testid="theme">
            <img
              onClick={onChange}
              className="img2"
              alt="theme"
              src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
            />
          </button>
        </div>
      ) : (
        <div className="NavbarContainer light">
          <img
            className="img2"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
          />
          <ul className="content-container2">
            <Link to="/" className="Link1">
              <li>Home</li>
            </Link>
            <Link to="/about" className="Link1">
              <li>About</li>
            </Link>
          </ul>
          <button type="button" data-testid="theme">
            <img
              onClick={onChange}
              className="img2"
              alt="theme"
              src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
            />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
