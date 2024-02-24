import { PropTypes } from 'prop-types'
import './Oscillators.css'

const Oscillators = ({ oscillator, setOscillator }) => {

  const oscillators = ['sine', 'square', 'triangle', 'sawtooth']

  return (
    <div className='oscillators'>
      {oscillators.map((oscillatorType)=>{
        return(
        <div
          key={oscillatorType}
          className={oscillatorType === oscillator ? `oscillatorType selected` : 'oscillatorType'}
          onClick={()=>setOscillator(oscillatorType)}
        >
          <label>{oscillatorType}</label>
        </div>
        )
      })}
    </div>
  )
}

Oscillators.propTypes = {
  oscillator: PropTypes.string,
  setOscillator: PropTypes.func
}

export default Oscillators
