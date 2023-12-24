import { useCallback, useEffect, useRef, useState } from 'react'
import Banner from './components/Banner'
import './App.css'

function App() {
  const [length,setLegnth] = useState(8)
  const [num,setNum] = useState(false)
  const [char,setChar] = useState(false)
  const [password,setPassword] = useState("")
  const [showBanner, setShowBanner] = useState(false);

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (num) {
      str += "0123456789"
    }
    if(char){
      str += "!@#$%^&*()_-+={}[]\|?/<>,.~`:;"
    }
    
    for (let i = 1; i <= length; i++) {
      let ch = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(ch)
    }
    setPassword(pass)

  },[length,num,char,setPassword])

  const copyPassToClipboard = useCallback(
    () => {
      passwordRef.current?.select()
      passwordRef.current?.setSelectionRange(0,999)
      window.navigator.clipboard.writeText(password)
      setShowBanner(true); 
    setTimeout(() => {
      setShowBanner(false); 
    }, 5000);
    },
    [password],
  )

  const handleCloseBanner = () => {
    setShowBanner(false); 
  };


  useEffect(() => {
    passwordGenerator()
  }, [length,num,char,setPassword])  
  
  return (
    <>
          <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
            <h1 className='text-white text-center my-3'>Password generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
              <input
                  type="text"
                  value={password}
                  className="outline-none w-full py-1 px-3"
                  placeholder="Password"
                  readOnly
                  ref={passwordRef}
              />
              <button onClick={copyPassToClipboard}
              className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
              >copy</button>
              
          </div>
          {showBanner && <Banner onClose={handleCloseBanner}/>}
          <div className='flex mt-4 text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLegnth(e.target.value)}}
                />
                <label>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
            <input
                type="checkbox"
                defaultChecked={num}
                id="numberInput"
                onChange={() => {
                    setNum((prev)=>!prev)
                }}
            />
            <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
                <input
                    type="checkbox"
                    defaultChecked={char}
                    id="characterInput"
                    onChange={() => {
                        setChar((prev)=>!prev)
                    }}
                />
                <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
      </div>
      
    </>
  )
}

export default App
