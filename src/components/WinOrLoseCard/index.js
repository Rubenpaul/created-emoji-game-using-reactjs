// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {topScore, score, playAgain} = props

  let url
  let resultText
  if (score < 12) {
    url = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
    resultText = 'You Lose'
  } else if (score === 12) {
    url = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    resultText = 'You Win'
  }

  const onClickPlayAgain = () => {
    playAgain()
  }

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
          <h1 className="match-result">{resultText}</h1>
          <p className="match-score">Best Score</p>
          <span className="span">{topScore}/12</span>
          <div className="play-again-container">
            <button
              className="play-again-btn"
              type="button"
              onClick={onClickPlayAgain}
            >
              Play Again
            </button>
          </div>
        </div>
        <div className="image-container">
          <img src={url} alt="" className="match-result-image" />
        </div>
      </div>
    </div>
  )
}

export default WinOrLoseCard
