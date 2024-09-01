import { useState } from 'react'
import './App.css'
import ContextApiInfo from './ContextApi/ContextApiInfo'
import Login from './Components/Login'
import ShowContext from './Components/ShowContext'
function App() {
  const [count, setCount] = useState(0)

  return (
    <ContextApiInfo>
      <div className='p-4 backdrop-blur-md bg-white/20 rounded-md'>
      <h1 className='text-orange-400'>login here</h1>
      <Login/>
      <ShowContext/>
      </div>
    </ContextApiInfo>
  )
}

export default App
