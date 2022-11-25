// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score} = props
  return (
    <div className="won-or-lose-container">
      <nav className="nav-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-logo"
          />
          <h1 className="emoji-game-heading">Emoji Game</h1>
        </div>
      </nav>
      <div className="result-container">
        <div className="container">
          <h1 className="match-result">You Won</h1>
          <p className="match-score">Best Score</p>
          <span className="span">12/12</span>
          <div className="play-again-container">
            <button className="play-again-btn" type="button">
              Play Again
            </button>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt=""
            className="match-result-image"
          />
        </div>
      </div>
    </div>
  )
}

export default WinOrLoseCard
