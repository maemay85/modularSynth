import { PropTypes } from 'prop-types'
import './Octave.css'

const Octave = ( { octave } ) => {
  return (
    <div className="octave">
      <div className='control-display'>
        <p>Z -</p>
        <p>X +</p>
      </div>
      <label>octave: {octave}</label>
    </div>
  )
}

Octave.propTypes = {
  octave: PropTypes.number
}

export default Octave;
