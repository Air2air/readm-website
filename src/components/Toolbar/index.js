import React from 'react'
import {ImFontSize, ImFont} from 'react-icons/im'
import rabbit from '../../assets/images/rabbit.svg'
import turtle from '../../assets/images/turtle.svg'
import './index.scss'
import '../../scss/controls.scss'

const Toolbar = () => (
  <>
    <div className="toolbar-wrapper">
      <div className="control">
        <ImFontSize className="icon" size={32} />
      </div>
      <div className="control">
        <ImFont className="icon" size={32} />
      </div>
      <div className="control">
        <img src={turtle} className="svg-icon" alt="Slow" />
      </div>
      <div className="control">
        <img src={rabbit} className="svg-icon" alt="Fast" />
      </div>
    </div>
  </>
)

export default Toolbar
