import {useState} from 'react'
import {FaMinus, FaPlus} from 'react-icons/fa'
import rabbit from '../../assets/images/rabbit.svg'
import turtle from '../../assets/images/turtle.svg'
import '../../scss/controls.scss'
import './styles.scss'

const Toolbar = ({...activeStory}) => {
  const [fontSize, setFontSize] = useState(22)

  return (
    <div className="toolbar-wrapper">
      <div className="toolbar-group left">
        {activeStory.title} title
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
      <div className="toolbar-group right">
        <div className="control">
          <img src={turtle} className="svg-icon" alt="Slow" />
        </div>
        <div className="control">
          <img src={rabbit} className="svg-icon" alt="Fast" />
        </div>
      </div>
    </div>
  )
}

export default Toolbar
