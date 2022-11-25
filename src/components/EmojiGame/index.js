import './index.css'

import {Component} from 'react'

import NavBar from '../NavBar/index'

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
  state = {score: 0, totalscore: 0}

  render() {
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    const emojisList = shuffledEmojisList()

    return (
      <div className="app-container">
        <NavBar />

        <ul className="emoji-list-container">
          {emojisList.map(eachEmoji => (
            <EmojiCard EmojiDetails={eachEmoji} key={eachEmoji.id} />
          ))}
        </ul>

        {/* <WinOrLoseCard /> */}
      </div>
    )
  }
}

export default EmojiGame
