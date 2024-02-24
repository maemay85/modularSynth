import './Keys.css'
import { PropTypes } from 'prop-types'
import { keyboardMap } from '../../utils/keyboardMap'

const Keys = ( { pressedKey } ) => {

  return (
    <div className="keyboard">
      {keyboardMap.map((thisKey)=>{
        return (
          <div
            key={thisKey.name}
            className={
              thisKey.name === pressedKey ?
                `${thisKey.color} pressed` : `${thisKey.color}`
            }
          >
            {thisKey.name}
          </div>

        )
      })}
    </div>
  )
}

Keys.propTypes = {
  pressedKey: PropTypes.string
}

export default Keys
