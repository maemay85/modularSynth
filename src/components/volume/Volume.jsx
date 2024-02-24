import { useEffect } from "react";
import Knob from "../knob/Knob";
import { PropTypes } from 'prop-types'
import { useState } from "react";
import './Volume.css'

const Volume = ({ setVolume }) => {
  const [value, setValue] = useState(0);

  useEffect(()=>{
    setVolume(value/2 - 50)
  },[value, setVolume])

  return (
    <div className="volume">
      <Knob value={value} setValue={setValue} />
      <label>volume: {value}</label>

    </div>
  );
}

Volume.propTypes = {
  setVolume: PropTypes.func
}

export default Volume
