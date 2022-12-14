// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {EmojiDetails, EmojiClicked} = props
  const {id, emojiName, emojiUrl} = EmojiDetails

  const onClickEmoji = () => {
    EmojiClicked(id)
  }

  return (
    <li className="Emoji-container">
      <button className="button" type="button" onClick={onClickEmoji}>
        <img src={emojiUrl} className="emoji-image" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
