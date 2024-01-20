import { useState } from 'react'
import './App.css'
import Pin from './Components/Pin'

function App() {
  const [pinValue, setPinValue] = useState('')

  return (
    <>
      <Pin length={4} setPin={setPinValue} />
      <h1>OTP: {pinValue}</h1>
    </>
  )
}

export default App
