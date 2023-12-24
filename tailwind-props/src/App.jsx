import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
     <h1 className=" text-black p-4 rounded-xl mb-4 bg-orange-400">
      Laptop Shop
    </h1>
      <Card name="Mackbook" company="Apple"/>
      <Card name="Pavelion" company="HP"/>
      <Card name="Super Lite" company="Dell"/>
    </>
  )
}

export default App
