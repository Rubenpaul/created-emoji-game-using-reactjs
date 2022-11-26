import './index.css'

import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {score: 0, prevEmojiid: 0, topScore: 0}

  playAgain = () => {
    const {topScore} = this.state
    console.log(topScore)
  }

  EmojiClicked = id => {
    const {prevEmojiid, score, topScore} = this.state

    if (prevEmojiid !== id) {
      if (score < 12) {
        this.setState(prevState => ({
          prevEmojiid: id,
          score: prevState.score + 1,
          topScore: prevState.topScore + 1,
        }))
      }
    } else {
      this.setState(
        this.setState(prevState => ({
          score: prevState.score - 1,
        })),
      )
    }

    localStorage.setItem('prevTopScore', `${topScore}`)
  }

  render() {
    const {score} = this.state
    console.log(score)

    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    const emojisList = shuffledEmojisList()

    return (
      <div className="app-container">
        {score !== 0 && score === 12 ? (
          <WinOrLoseCard score={score} playAgain={this.playAgain} />
        ) : (
          <>
            <NavBar score={score} topScore={topScore} />
            <ul className="emoji-list-container">
              {emojisList.map(eachEmoji => (
                <EmojiCard
                  EmojiDetails={eachEmoji}
                  key={eachEmoji.id}
                  list={emojisList}
                  EmojiClicked={this.EmojiClicked}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default EmojiGame
