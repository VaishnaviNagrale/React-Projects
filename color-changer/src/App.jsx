import { useState } from 'react'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className="flex flex-col items-center justify-end h-screen duration-200" style={{backgroundColor: color}}>
        <div className="flexed flex-wrap flex justify-center bottom-12 inset-x-0 px-2 mb-4">
          <div className="flex flexed flex-wrap justify-center gap-3 shadow-md bg-white px-4 py-1 rounded-3xl">
            <button className="outline-none px-6 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}} onClick={()=>setColor("red")}>Red</button>
            <button className="outline-none px-6 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}} onClick={()=>setColor("green")}>Green</button>
            <button className="outline-none px-6 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}} onClick={()=>setColor("blue")}>Blue</button>
            <button className="outline-none px-6 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
            <button className="outline-none px-6 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "pink"}} onClick={()=>setColor("pink")}>Pink</button>
            <button className="outline-none px-6 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "purple"}} onClick={()=>setColor("purple")}>Purple</button>
            <button className="outline-none px-6 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "olive"}} onClick={()=>setColor("olive")}>Olive</button>
            <button className="outline-none px-6 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "gold"}} onClick={()=>setColor("gold")}>Gold</button>
            <button className="outline-none px-6 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "grey"}} onClick={()=>setColor("grey")}>Grey</button>
            <button className="outline-none px-6 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "orange"}} onClick={()=>setColor("orange")}>Orange</button>
            <button className="outline-none px-6 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}} onClick={()=>setColor("black")}>Black</button>
          </div>
        </div>
    </div>
  )
}

export default App
