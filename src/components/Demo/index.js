import React from 'react'
import SpeakerPhrase from '../SpeakerPhrase'
import Toolbar from '../Toolbar'
import './index.scss'

const speakerphrase = [
  {
    content: 'My Grandpa is going to visit me today.',
  },
  {
    content: 'I waited and waited, until I suddenly heard a knock at the door.',
  },
  {
    content: 'It was my Grandpa. I showed him my room.',
  },
  {
    content: 'And we played a game together.',
  },
]

const Demo = () => (
  <>
    <section className="demo-wrapper">
      <Toolbar />
      <div className="speakerphrase-section">
        {speakerphrase.map(item => (
          <SpeakerPhrase content={item.content} />
        ))}
      </div>
    </section>
  </>
)

export default Demo
