import { useState } from 'react';
import './App.css';

const ColorSquare = () => {

    let colorList : string[] = [
        "red",
        "blue",
        "green"
    ]

    const [color, setColor] = useState<string>(colorList[0]);
    const [emotion, setEmotion] = useState<string>(":(")
    const [name, setName] = useState<string>("Joske");
    const [nameField, setNameField] = useState<string>("Joske")
    const [circle, setCircle] = useState<number>(0);

    const colorHandle = () => {
        setColor(prevItem => {
            const index = (colorList.indexOf(prevItem) + 1) % colorList.length;
            return colorList[index]
        })
    }

    return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <p><b>{name}</b></p>
        <div className="square" style={{backgroundColor: color, width: "5em", height: "5em", borderRadius: circle}} onClick={colorHandle}>
        <p style={{display: 'flex', justifyContent: 'center', height: "100%", alignItems: 'center' }}>{emotion}</p>
        </div>

        <input type="text" value={nameField} onChange={(e) => setNameField(e.target.value)}/>
        <button onClick={() => setName(nameField)}>Set</button>

        <button onClick={() =>  {setName("Joske"); setNameField("Joske")}} >Reset</button>
        
        <select name="face" id="face" onChange={(e) => setEmotion(e.target.value)}>
            <option value=":|">:|</option>
            <option value=":(">:(</option>
            <option value=":)">:)</option>
        </select>
        
        <input type="checkbox" name='square' id='square' onChange={(e) => e.target.checked ? setCircle(100) : setCircle(0)}/> <label htmlFor="square">Square</label>
    </div>
    )
}
const JoskeApp = () => {
    return <ColorSquare/>
}

export default JoskeApp;