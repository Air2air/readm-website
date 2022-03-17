import {useState} from 'react'
import {FaMinus, FaPlus} from 'react-icons/fa'
import rabbit from '../../assets/images/rabbit.svg'
import turtle from '../../assets/images/turtle.svg'
import '../../scss/controls.scss'
import './styles.scss'

const Toolbar = () => {
  const [fontSize, setFontSize] = useState(22)

  return (
    <div className="toolbar-wrapper">
      <div className="toolbar-text-wrapper">
        <div className="image-wrapper">
          <img
            src="https://cdn-icons-png.flaticon.com/512/673/673890.png"
            alt="There Must Be a Rainbow"
          />
        </div>
        <div className="toolbar-text">
          <div className="title">There Must Be a Rainbow</div>
          <div className="author">Nerissa Govender</div>
        </div>
      </div>
      <div className="toolbar-group right">
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
