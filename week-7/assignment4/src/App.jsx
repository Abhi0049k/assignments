import { useRecoilState } from 'recoil'
import './App.css'
import { countAtom } from './store/atoms'
import { useCallback, useState } from 'react'
import { makeSentence } from './sentences'

function App() {

  return (
    <>
      <InputField />
    </>
  )
}

function InputField() {

  const [count, setCount] = useRecoilState(countAtom);
  const [para, setPara] = useState('');

  const handleChange = useCallback((e) => {
    try {
      let n = Number(e.target.value);
      setCount(Number(n));
    } catch (err) {
      alert('Invalid Input');
    }
  }, [])

  const handleParaGenerate = useCallback((c) => {
    if (c == 0) return console.log('count is 0');
    const p = makeSentence(c);
    setPara(p);
  }, [])

  return (
    <div style={{ height: '94vh', width: '98%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap:'24px', margin: '14px' }}>
      <h1>Para Generator</h1>
      <div style={{ display: 'flex' }}>
        <input style={{ border: '1px solid rgba(0,0,0,0.3)', borderRadius: '4px', width: '240px', height: '40px', padding: '0px 12px' }} placeholder='Enter Number of Words' type="text" value={count === 0 ? "" : count} onChange={handleChange} />
        <button style={{ border: '1px solid rgba(0,0,0,0.3)', borderRadius: '4px', height: '40px', padding: '0 12px' }} onClick={() => handleParaGenerate(count)}>Generate</button>
      </div>
      <div style={{ width: '60%', fontSize: '20px', textAlign: 'center' }}>
        {para}
      </div>
    </div>
  )
}

export default App
