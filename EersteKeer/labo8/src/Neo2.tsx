import { useContext, useState } from 'react'
import { NeoContext2 } from './Context/Neo2';

const FourthLine = () => {
    const {text} = useContext(NeoContext2)
    return <><p>{text}</p></>;
}
const ThirdLine = () => <><p>Follow the white rabbit.</p><FourthLine/></>;
const SecondLine = () => <><p>The matrix has you...</p><ThirdLine/></>;
const FirstLine = () => <><p>Wake Up, Neo...</p><SecondLine/></>

const NeoAganeApp = () => {
  const {text, setText} = useContext(NeoContext2)
  return (
    <>
      <h3>Here we go agane</h3>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      <div style={{backgroundColor: "black", color: "#4AF626", display: "flex", flexDirection: "column", padding: 20}}> 
        <FirstLine/>
      </div>
    </>
  )
}

export default NeoAganeApp