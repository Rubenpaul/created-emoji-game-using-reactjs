// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgain} = props

  let url
  let resultText

  const result = score === 11 ? score + 1 : score

  let scoreResult
  if (result === 12) {
    url = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    resultText = 'You Won'
    scoreResult = 'Best Score'
  } else {
    url = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
    resultText = 'You Lose'
    scoreResult = 'Score'
  }

  const onClickPlayAgain = () => {
    playAgain(result)
  }

  return (
    <div className="won-or-lose-container">
      <div className="result-container">
        <div className="container">
          <h1 className="match-result">{resultText}</h1>
          <p className="match-score">{scoreResult}</p>
          <p className="span">{`${result}/12`}</p>
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
          <img src={url} alt="win or lose" className="match-result-image" />
        </div>
      </div>
    </div>
  )
}

export default WinOrLoseCard
