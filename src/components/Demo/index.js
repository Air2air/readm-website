import {useState} from 'react'
import {FaMinus, FaPlus} from 'react-icons/fa'
import Cards from '../Cards'
import rabbit from '../../assets/images/rabbit.svg'
import turtle from '../../assets/images/turtle.svg'
import SpeakerPhrase from '../SpeakerPhrase'
import '../../scss/controls.scss'
import './toolbar.scss'
import './styles.scss'

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

const Demo = () => {
  const [fontSize, setFontSize] = useState(22)

  return (
    <>
      <Cards />
      <div className="demo-wrapper" style={{fontSize: `${fontSize}px`}}>
        <div className="toolbar-wrapper">
          <div className="toolbar-inner">
            <div className="toolbar-group">
              <button
                type="button"
                className="control"
                onClick={() => setFontSize(fontSize - 1)}
              >
                <FaMinus className="icon" size={32} />
              </button>
              <button
                type="button"
                className="control"
                onClick={() => setFontSize(fontSize + 1)}
              >
                <FaPlus className="icon" size={32} />
              </button>
            </div>

            <div className="toolbar-group">
              <div className="control">
                <img src={turtle} className="svg-icon" alt="Slow" />
              </div>
              <div className="control">
                <img src={rabbit} className="svg-icon" alt="Fast" />
              </div>
            </div>
          </div>
        </div>

        <div className="speakerphrase-section">
          {speakerphrase.map(item => (
            <SpeakerPhrase content={item.content} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Demo
