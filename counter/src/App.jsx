import { useState } from 'react'
import './App.css'

function App() {
  const [counter,setCount] = useState(0)
  function addValue(){
    if (counter<20) {
      setCount(counter+1)
    }
  }
  function removeValue(){
    if(counter>0){
      setCount(counter-1)
    }
  }
  return (
    <>
     <h1>COUNTER WEBSITE</h1>
     <h2>Counter Value : {counter}</h2>
     <button onClick={addValue}>Increment Counter</button>
     <br/><br />
     <button onClick={removeValue}>Decrement Counter</button>
    </>
  )
}

export default App
