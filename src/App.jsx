import * as Tone from 'tone'
import { useState } from 'react'
import './App.css'
import Volume from './components/volume/Volume'
import useKeypress from 'react-use-keypress'
import Envelope from './components/envelope/Envelope'
import Oscillators from './components/oscillator/Oscillators'
import Keys from './components/keys/Keys'
import Octave from './components/octave/Octave'

function App() {

  const [volume, setVolume] = useState(0);
  const [attack, setAttack] = useState(0);
  const [decay, setDecay] = useState(0);
  const [sustain, setSustain] = useState(0);
  const [release, setRelease] = useState(0)
  const [oscillator, setOscillator] = useState('sine')
  const [pressedKey, setPressedKey] = useState('')
  const [octave, setOctave] = useState(4);

  const synth = new Tone.Synth({
    oscillator: {
      type: oscillator,
    },
    envelope: {
      attack: attack,
      decay: decay,
      sustain: sustain,
      release: release
    },
    volume: volume
  }).toDestination();

  const keyAction = (name, note) => {
        synth.triggerAttackRelease(`${note}`, .5)
        setPressedKey(name)
      }

  useKeypress(['a','w','s','e','d','f','t','g','y','h','u','j','k', 'z', 'x'], (e)=>{
    switch(e.key){
      case 'a': keyAction('a', `C${octave}`);
      break;
      case 'w': keyAction('w', `C#${octave}`);
      break;
      case 's': keyAction('s', `D${octave}`);
      break;
      case 'e': keyAction('e', `D#${octave}`);
      break;
      case 'd': keyAction('d', `E${octave}`);
      break;
      case 'f': keyAction('f', `F${octave}`);
      break;
      case 't': keyAction('t', `F#${octave}`);
      break;
      case 'g': keyAction('g', `G${octave}`);
      break;
      case 'y': keyAction('y', `G#${octave}`);
      break;
      case 'h': keyAction('h', `A${octave}`);
      break;
      case 'u': keyAction('u', `A#${octave}`);
      break;
      case 'j': keyAction('j', `B${octave}`);
      break;
      case 'k': keyAction('k', `C${octave + 1}`);
      break;
      case 'z': if (octave > 2) setOctave(octave - 1);
      break;
      case 'x': if (octave < 5) setOctave(octave + 1);
      break;
      default: null;
    }
  })

  return (
    <>
      <div id='app'>
      <h1>{`m y . s i l l y . l i t t l e . s y n t h e s i z e r`}</h1>
      <Oscillators oscillator={oscillator} setOscillator={setOscillator} />
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
      <div className='volume-and-octave'>
        <Volume setVolume={setVolume} />
        <Octave octave={octave} />
      </div>
      <Keys pressedKey={pressedKey} />
      </div>
    </>
  )
}

export default App
