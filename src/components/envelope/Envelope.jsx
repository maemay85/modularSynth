import { useEffect } from "react";
import { PropTypes } from 'prop-types'
import './Envelope.css'
import EnvelopeKnob from "./EnvelopeKnob";

const Envelope = ({ attack, decay, sustain, release, setAttack, setDecay, setSustain, setRelease }) => {

  const envelope = [
    {
      name: 'attack',
      val: attack,
      func: setAttack
    },
    {
      name: 'decay',
      val: decay,
      func: setDecay
    },
    {
      name: 'sustain',
      val: sustain,
      func: setSustain
    },
    {
      name: 'release',
      val: release,
      func: setRelease
    },
  ]

  useEffect(()=>{
    setAttack(attack)
  },[attack, setAttack])

  useEffect(()=>{
    setDecay(decay)
  },[decay, setDecay])

  useEffect(()=>{
    setSustain(sustain)
  },[sustain, setSustain])

  useEffect(()=>{
    setRelease(release)
  },[release, setRelease])

  return (
    <div className="envelope-container">
      {envelope.map((val)=>{
        return(
          <div key={val.name} className={val.name}>
            <EnvelopeKnob value={val.val} setValue={val.func} />
            <label>{val.name}: {val.val.toFixed(2)}</label>
          </div>
        )
      })
      }
    </div>
  );
}

Envelope.propTypes = {
  attack: PropTypes.number,
  setAttack: PropTypes.func,
  decay: PropTypes.number,
  setDecay: PropTypes.func,
  sustain: PropTypes.number,
  setSustain: PropTypes.func,
  release: PropTypes.number,
  setRelease: PropTypes.func,
}

export default Envelope
