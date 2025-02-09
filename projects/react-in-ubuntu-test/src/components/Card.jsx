import PropTypes from 'prop-types';
import { useState } from 'react';

const Card = () => {
    const [count, setCount] = useState(0)
    const increase = () => {
        setCount(count + 1)
    }
    const decrease = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }
    
    return (
        <div className="card">
        <button>
          count is {count}
        </button>
        <button onClick={increase}>
            +
        </button>
        <button onClick={decrease}>
            -
        </button>
        <button onClick={reset}>
            Reset
        </button>
      </div>
    )
}

Card.propTypes = {
    count: PropTypes.number.isRequired,
    setCount: PropTypes.func.isRequired
}

export { Card }