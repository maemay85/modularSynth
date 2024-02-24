
import './Knob.css'
import { PropTypes } from 'prop-types';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { styled } from 'styled-components';

const Knob = ({ value, setValue }) => {

  const [snapshot, setSnapshot] = useState(value);
  const [startVal, setStartVal] = useState(0);
  const [clicked, setClicked] = useState(false)

  const onStart = useCallback(
    (e) => {
      e.preventDefault();
      setStartVal(value);
      setClicked(true)
      setSnapshot(e.clientY);
    },
    [value]
  )

  useEffect(()=>{
    const onUpdate = (e) => {
      e.preventDefault()
      if (clicked) {
        let adjustedVal = startVal + snapshot - e.clientY
        if(adjustedVal < 0) adjustedVal = 0
        if(adjustedVal > 100) adjustedVal = 100
        setValue(adjustedVal)
      }
    }

    const onEnd = () => {
      setStartVal(0);
      setClicked(false)
    };

    document.addEventListener('mousemove', onUpdate)
    document.addEventListener('mouseup', onEnd);
    return () => {
      document.removeEventListener('mousemove', onUpdate)
      document.removeEventListener('mouseup', onEnd);
    };
  }, [startVal, setValue, snapshot, value, clicked])

  const SpinningKnob = styled.div`
  transform: ${props => `rotateZ(${props.value * 3 - 150}deg)`};
  `

  return (
    <SpinningKnob
      className='knob'
      draggable='true'
      onMouseDown={onStart}
      value={value}
    >
      <div className='arrow'>
    </div>
    </SpinningKnob>
  )
}

Knob.propTypes = {
  value: PropTypes.number,
  setValue: PropTypes.func
}

export default Knob
