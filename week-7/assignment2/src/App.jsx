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
      <button style={{padding: '4px 8px'}} onClick={useCallback(()=> handleClick('red'))}>Red</button>
      <button style={{padding: '4px 8px'}} onClick={useCallback(()=> handleClick('yellow'))}>Yellow</button>
      <button style={{padding: '4px 8px'}} onClick={useCallback(()=> handleClick('black'))}>Black</button>
      <button style={{padding: '4px 8px'}} onClick={useCallback(()=> handleClick('purple'))}>Purple</button>
      <button style={{padding: '4px 8px'}} onClick={useCallback(()=> handleClick('green'))}>Green</button>
      <button style={{padding: '4px 8px'}} onClick={useCallback(()=> handleClick('blue'))}>Blue</button>
      <button style={{padding: '4px 8px'}} onClick={useCallback(()=> handleClick('white'))}>Default</button>
    </div>
  )
}

const styles = {
  bgcolor: {
    backgroundColor: 'white',
    padding: '4px',
    border: '1px solid black',
    display: 'flex',
    gap: '8px',
    position: 'absolute',
    top: '88vh'
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid black',
    width: '100%',
    height: '90vh'
  }
}

export default App
