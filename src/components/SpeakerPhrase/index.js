import React from 'react'
import {HiMicrophone, HiVolumeUp} from 'react-icons/hi'
import './index.scss'

const SpeakerPhrase = ({content}) => (
  <>
    <div className="speakerphrase-wrapper">
      <div className="speakerphrase-textline">
        {content.split(' ').map(val => (
          <div className="speakerphrase-word">{val}</div>
        ))}
      </div>
      <Controls />
    </div>
  </>
)

const Controls = () => (
  <div className="speakerphrase-control-row">
    <div className="control">
      <HiMicrophone className="icon" size={34} />
    </div>
    <div className="control">
      <HiVolumeUp className="icon" size={34} />
    </div>
  </div>
)

export default SpeakerPhrase
