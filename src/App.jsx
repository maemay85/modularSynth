import * as Tone from 'tone'
import { useState } from 'react'
import './App.css'
import Parameter from './components/Parameter'
import useKeypress from 'react-use-keypress'
import Envelope from './components/envelope/Envelope'


function App() {

  const [volume, setVolume] = useState(0);
  const [attack, setAttack] = useState(0);
  const [decay, setDecay] = useState(0);
  const [sustain, setSustain] = useState(0);
  const [release, setRelease] = useState(0)

  const synth = new Tone.Synth({
    oscillator: {
      type: 'triangle',
    },
    envelope: {
      attack: attack,
      decay: decay,
      sustain: sustain,
      release: release
    },
    volume: volume
  }).toDestination();

  useKeypress(['a','w','s','e','d','f','t','g','y','h','u','j','k'], (e)=>{
    switch(e.key){
      case 'a': synth.triggerAttackRelease("C4", .5);
      break;
      case 'w': synth.triggerAttackRelease("C#4", .5);
      break;
      case 's': synth.triggerAttackRelease("D4", .5);
      break;
      case 'e': synth.triggerAttackRelease("D#4", .5);
      break;
      case 'd': synth.triggerAttackRelease("E4", .5);
      break;
      case 'f': synth.triggerAttackRelease("F4", .5);
      break;
      case 't': synth.triggerAttackRelease("F#4", .5);
      break;
      case 'g': synth.triggerAttackRelease("G4", .5);
      break;
      case 'y': synth.triggerAttackRelease("G#4", .5);
      break;
      case 'h': synth.triggerAttackRelease("A4", .5);
      break;
      case 'u': synth.triggerAttackRelease("A#4", .5);
      break;
      case 'j': synth.triggerAttackRelease("B4", .5);
      break;
      case 'k': synth.triggerAttackRelease("C5", .5);
      break;
    }
  })

  return (
    <>
      <div id='app'>
      <Parameter setVolume={setVolume} />
      <Envelope
        attack={attack}
        setAttack={setAttack}
        decay={decay}
        setDecay={setDecay}
        sustain={sustain}
        setSustain={setSustain}
        release={release}
        setRelease={setRelease}
      />
      </div>
    </>
  )
}

export default App
