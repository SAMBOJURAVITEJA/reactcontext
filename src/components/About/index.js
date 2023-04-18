import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return isDarkTheme ? (
        <div className="bg-container darkAbout">
          <Navbar />
          <div className="aboutContainer">
            <img
              className="img1"
              src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
              alt="about"
            />
            <h1>About</h1>
          </div>
        </div>
      ) : (
        <div className="bg-container lightAbout">
          <Navbar />
          <div className="aboutContainer">
            <img
              className="img1"
              src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
              alt="about"
            />
            <h1>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
