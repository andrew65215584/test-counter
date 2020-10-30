import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../redux/actions'


import "./counter.scss"

function Counter() {
    const dispatch = useDispatch()
    const value = useSelector(state => state.value)

    const handleIncrement = () => {
    dispatch(increment(1))
    }
    
    const handleDecrement = () => {
         dispatch(decrement(1))
    }

    const handleAsyncIncrement = () => {
        setTimeout(() => {
           dispatch(increment(1)) 
        }, 1000);
    }

    return (
        <div className="counter">
            <p className="counter-value">{value ? value : 0}</p>
            <ul className="counter-list">
               <li className="counter-item"><button className="counter-btn" onClick={handleIncrement}>increment</button></li>
               <li className="counter-item"><button className="counter-btn" onClick={handleDecrement}>decrement</button></li>
               <li className="counter-item"><button className="counter-btn" onClick={handleAsyncIncrement}>async increment</button></li>
            </ul>
        </div>
    )
}

export default Counter
