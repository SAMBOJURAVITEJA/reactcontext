import Navbar from '../Navbar'

import './index.css'

import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return isDarkTheme ? (
        <div className="bg-container">
          <Navbar />
          <div className="notFoundContainer1">
            <img
              className="img1"
              alt="not found"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            />
            <h1>Lost Your Way?</h1>
            <p>We cannot seem to find the page you are looking for.</p>
          </div>
        </div>
      ) : (
        <div className="bg-container">
          <Navbar />
          <div className="notFoundContainer2">
            <img
              className="img1"
              alt="not found"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            />
            <h1>Lost Your Way?</h1>
            <p>We cannot seem to find the page you are looking for.</p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
