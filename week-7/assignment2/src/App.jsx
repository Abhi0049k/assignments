import './App.css';
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { colorAtom } from './store/atoms';
import { useCallback } from 'react';

function App() {

  return (
    <RecoilRoot>
      <MainContainer/>
    </RecoilRoot>
  )
}

function MainContainer(){
  const color = useRecoilValue(colorAtom);
  return (
    <div style={{...styles.main, ...{backgroundColor: color}}}>
      <OptionContainer/>
    </div>
  )
}

function OptionContainer(){
  const state = useSetRecoilState(colorAtom);

  const handleClick = (clr)=>{
    state(clr);
  }

  return (
    <div style={styles.bgcolor}>
      <button style={{padding: '4px 8px', border: '1px solid rgba(0,0, 0, 0.3)', borderRadius: '4px', backgroundColor: 'red'}} onClick={useCallback(()=> handleClick('red'))}>Red</button>
      <button style={{padding: '4px 8px', border: '1px solid rgba(0,0, 0, 0.3)', borderRadius: '4px', backgroundColor: 'yellow'}} onClick={useCallback(()=> handleClick('yellow'))}>Yellow</button>
      <button style={{padding: '4px 8px', border: '1px solid rgba(0,0, 0, 0.3)', borderRadius: '4px', color: 'white', backgroundColor: 'black'}} onClick={useCallback(()=> handleClick('black'))}>Black</button>
      <button style={{padding: '4px 8px', border: '1px solid rgba(0,0, 0, 0.3)', borderRadius: '4px', color: 'white', backgroundColor: 'purple'}} onClick={useCallback(()=> handleClick('purple'))}>Purple</button>
      <button style={{padding: '4px 8px', border: '1px solid rgba(0,0, 0, 0.3)', borderRadius: '4px', color: 'white', backgroundColor: 'green'}} onClick={useCallback(()=> handleClick('green'))}>Green</button>
      <button style={{padding: '4px 8px', border: '1px solid rgba(0,0, 0, 0.3)', borderRadius: '4px', color: 'white', backgroundColor: 'blue'}} onClick={useCallback(()=> handleClick('blue'))}>Blue</button>
      <button style={{padding: '4px 8px', border: '1px solid rgba(0,0, 0, 0.3)', borderRadius: '4px', backgroundColor: 'white'}} onClick={useCallback(()=> handleClick('white'))}>Default</button>
    </div>
  )
}

const styles = {
  bgcolor: {
    backgroundColor: 'white',
    padding: '8px',
    border: '1px solid rgba(0,0,0,0.3)',
    display: 'flex',
    gap: '14px',
    marginBottom: '14px',
    borderRadius: '4px'
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid rgba(0,0,0,0.3)',
    width: '99%',
    margin: '1px auto',
    height: '99.2vh',
    alignItems: 'end'
  }
}

export default App
