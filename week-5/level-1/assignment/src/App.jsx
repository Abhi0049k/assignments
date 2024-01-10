import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [details, setDetails] = useState({
    name: 'Lokeshwar',
    description: 'A TA in the 100xDevs Cohort 2.0',
    interests: ['Ionic', 'Open Source', 'App Dev'],
    linkedIn: '',
    twitter: ''
  })

  
  return (
    <>
      <Card {...details} />
    </>
  )
}

export default App
