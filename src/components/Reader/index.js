import {useState} from 'react'
import Cards from '../Cards'
import Toolbar from '../Toolbar'
import Phrase from '../Phrase'
import '../../scss/controls.scss'
import './styles.scss'

const Reader = () => {
  const [fontSize, setFontSize] = useState(22)

  return (
    <>
      <div className="reader-wrapper">
        <Cards fontSize={fontSize} />
        <Toolbar fontSize={fontSize} />
        <Phrase fontSize={fontSize} />
      </div>
    </>
  )
}

export default Reader
