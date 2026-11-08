import { useContext, useState } from 'react'
import { NeoContext } from './Context/Neo';

interface LineProps {
  text: string
}

const FourthLine = () => {
    const {text} = useContext(NeoContext);
    return (
        <><p>{text}</p></>
    )    
}
const ThirdLine = () => <><p>Follow the white rabbit.</p><FourthLine/></>;
const SecondLine = () => <><p>The matrix has you...</p><ThirdLine/></>;
const FirstLine = () => <><p>Wake Up, Neo...</p><SecondLine/></>

const App = () => {
  const {text, setText} = useContext(NeoContext);
  return (
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      <div style={{backgroundColor: "black", color: "#4AF626", display: "flex", flexDirection: "column", padding: 20}}> 
        <FirstLine/>
      </div>
    </>
  )
}

export default App