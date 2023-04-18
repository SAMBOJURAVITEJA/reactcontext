import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return isDarkTheme ? (
        <div className="bg-container darkHome">
          <Navbar />
          <div className="homeContainer">
            <img
              className="img1"
              src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
              alt="home"
            />
            <h1>Home</h1>
          </div>
        </div>
      ) : (
        <div className="bg-container lightHome">
          <Navbar />
          <div className="homeContainer">
            <img
              className="img1"
              src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
              alt="home"
            />
            <h1>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
