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
    isGameEnds: false,
    topScore: 0,
    isNavScoreRemove: false,
    emojiItemList: [],
  }

  playAgain = result => {
    const {topScore} = this.state

    if (result > topScore) {
      this.setState({topScore: result})
    }
    this.setState(prevState => ({
      isGameEnds: !prevState.isGameEnds,
      isNavScoreRemove: !prevState.isNavScoreRemove,
      emojiItemList: [],
      score: 0,
    }))
  }

  EmojiClicked = id => {
    const {score, emojiItemList} = this.state

    if (emojiItemList.includes(id)) {
      this.setState(prevState => ({
        isGameEnds: !prevState.isGameEnds,
        isNavScoreRemove: !prevState.isNavScoreRemove,
      }))
    } else if (score === 11) {
      this.setState(prevState => ({
        isGameEnds: !prevState.isGameEnds,
        isNavScoreRemove: !prevState.isNavScoreRemove,
      }))
    } else {
      this.setState(prevState => ({
        emojiItemList: [...prevState.emojiItemList, id],
        score: prevState.score + 1,
      }))
    }
  }

  render() {
    const {
      score,
      isGameEnds,
      topScore,
      isNavScoreRemove,
      emojiItemList,
    } = this.state
    console.log(emojiItemList)

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
