import React from 'react'
import "./Home.css"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { inc, dec, reset} from '../../redux/counter-slice'

function Home() {
  const counter = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className='home'>
      <h2>Redux Toolkit <br /> Amaliyot</h2>
      <h4>Counter {counter}</h4>
      <button onClick={()=> dispatch(inc(1))}>Increment 1</button>
      <button onClick={()=> dispatch(inc(10))}>Increment 10</button>
      <button disabled={counter <= 0} onClick={()=> dispatch(dec())}>Decrement</button>
      <button onClick={()=> dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Home