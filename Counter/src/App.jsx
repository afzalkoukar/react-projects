import { useState } from 'react'
import './App.css'

function App() {

  let [count, Setcount] = useState(0)

  const AddValue = ()=>{
    if(count<20){
    Setcount(count+1)
    }
    else {
      count = 20;
    }
  }

  const DecreseValue = ()=>{
    if(count > 0){
    Setcount(count-1)
    }
    else{
      count = 0;
    }
  }
  return (
    <>
      <h1>A Simple Counter App</h1>
      <h2>Counter {count}</h2>
      <br/>
      <button onClick={AddValue}>Increse Count</button>
      <br/>
      <br/>
      <button onClick={DecreseValue}>Decrease Count </button>
    </>
  )
}

export default App
