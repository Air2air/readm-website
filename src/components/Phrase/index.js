import {useState} from 'react'
import {HiMicrophone, HiVolumeUp} from 'react-icons/hi'
import './index.scss'

const story = [
  {
    id: 0,
    phrase: 'My Grandpa is going to visit me today.',
    image: 'https://cdn-icons-png.flaticon.com/512/61/61298.png',
  },
  {
    id: 1,
    phrase: 'I waited and waited, until I suddenly heard a knock at the door.',
    image: 'https://cdn-icons-png.flaticon.com/512/1156/1156949.png',
  },
  {
    id: 2,
    phrase: 'It was my Grandpa. I showed him my room.',
    image: 'https://cdn-icons-png.flaticon.com/512/76/76663.png',
  },
  {
    id: 3,
    phrase: 'And we played a game together.',
    image: 'https://cdn-icons-png.flaticon.com/512/771/771245.png',
  },
]

const Phrase = () => (
  <div className="phrase-section">
    {story.length &&
      story.map(item => (
        <PhraseItem key={item.id} phrase={item.phrase} id={item.id} />
      ))}
  </div>
)

const PhraseItem = ({phrase, id, fontSize}) => (
  <div className="phrase-wrapper">
    <div className="phrase-textline">
      {phrase.length &&
        phrase.split(' ').map(val => (
          <div key={id} className="phrase-word" style={{fontSize: 22}}>
            {val}
          </div>
        ))}
    </div>
    <PhrasePanel />
  </div>
)

const PhrasePanel = () => (
  <div className="phrase-control-row">
    <div className="control">
      <HiMicrophone className="icon" size={34} />
    </div>
    <div className="control">
      <HiVolumeUp className="icon" size={34} />
    </div>
  </div>
)

export default Phrase
