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
  state = {
    score: 0,
    prevEmojiid: 0,
    isGameEnds: false,
    topScore: 0,
    isNavScoreRemove: false,
  }

  playAgain = score => {
    const {topScore} = this.state

    if (score > topScore) {
      this.setState({topScore: score})
    }
    this.setState(prevState => ({
      isGameEnds: !prevState.isGameEnds,
      isNavScoreRemove: !prevState.isNavScoreRemove,
      score: 0,
    }))
  }

  EmojiClicked = id => {
    const {prevEmojiid, score} = this.state

    if (prevEmojiid !== id) {
      this.setState(prevState => ({
        prevEmojiid: id,
        score: prevState.score + 1,
      }))
      if (score === 11) {
        this.setState(prevState => ({
          isGameEnds: !prevState.isGameEnds,
          isNavScoreRemove: !prevState.isNavScoreRemove,
        }))
      }
    } else {
      this.setState(
        this.setState(prevState => ({
          isGameEnds: !prevState.isGameEnds,
          isNavScoreRemove: !prevState.isNavScoreRemove,
        })),
      )
    }
  }

  render() {
    const {score, isGameEnds, topScore, isNavScoreRemove} = this.state

    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    const emojisList = shuffledEmojisList()

    return (
      <div className="app-container">
        <NavBar
          score={score}
          topScore={topScore}
          isNavScoreRemove={isNavScoreRemove}
        />
        {isGameEnds !== true ? (
          <>
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
        ) : (
          <WinOrLoseCard score={score} playAgain={this.playAgain} />
        )}
      </div>
    )
  }
}

export default EmojiGame
