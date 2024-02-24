
import './EnvelopeKnob.css'
import { PropTypes } from 'prop-types';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { styled } from 'styled-components';

const EnvelopeKnob = ({ value, setValue }) => {

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
        let adjustedVal = startVal/100 + snapshot/100 - e.clientY/100
        if(adjustedVal < 0) adjustedVal = 0
        if(adjustedVal > 1) adjustedVal = 1
        setValue((adjustedVal))
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
  transform: ${props => `rotateZ(${props.value * 300 - 150}deg)`};
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

EnvelopeKnob.propTypes = {
  value: PropTypes.number,
  setValue: PropTypes.func
}

export default EnvelopeKnob
