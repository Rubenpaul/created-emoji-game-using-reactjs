// Write your code here.

import './index.css'

const NavBar = props => {
  const {score, topScore} = props

  return (
    <nav className="nav-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="emoji-game-heading">Emoji Game</h1>
      </div>
      <div className="score-container">
        <p className="score"> score: {score}</p>
        <p className="top-score">Top Score: {topScore}</p>
      </div>
    </nav>
  )
}

export default NavBar
