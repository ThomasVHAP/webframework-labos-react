import { useState } from "react";

const ColorApp = () => {

    const [color, setColor] = useState<string>("#000000")

    const colorArray = [
        "#000000",
        "#FF0000",
        "#00FF00",
        "#0000FF"
    ]

    return (
        <>
            <h3>ColorAppje</h3>

            <label htmlFor="color" id="color">Pick color</label>
            {
                colorArray.map(color => (
                    <input type="color" value={color} id="color" onChange={(e) => setColor(e.target.value)}/>
                ))
            }

            <div style={{backgroundColor: color, width: "2em", height: "2em"}}></div>

        </>
    )
}

export default ColorApp;