import { useEffect } from "react";
import Knob from "./knob/Knob";
import { PropTypes } from 'prop-types'
import { useState } from "react";
import './Parameter.css'

const Parameter = ({ setVolume }) => {
  const [value, setValue] = useState(0);

  useEffect(()=>{
    setVolume(value/2 - 50)
  },[value, setVolume])

  return (
    <div className="parameter">
      <Knob value={value} setValue={setValue} />
      <label>volume: {value}</label>

    </div>
  );
}

Parameter.propTypes = {
  setVolume: PropTypes.func
}

export default Parameter
