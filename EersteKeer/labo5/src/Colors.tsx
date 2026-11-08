import { useState } from "react"
import styles from "./styles.module.css"

const ColorSelect = () => {

    const colors: string[] = [
        "red",
        "green",
        "blue",
        "yellow",
        "orange",
        "purple",
        "black",
        "white"
    ];

    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [color, setColor] = useState<string[]>([""])

    const colorHandle : React.ChangeEventHandler<HTMLSelectElement, HTMLSelectElement>= (e) => {
        let colorOption : string[] = [];
        for (let element of e.target.selectedOptions) {
            colorOption.push(element.value);
        }
        setSelectedColors(colorOption);
    }

    return (
        <>
            <select multiple value={selectedColors} onChange={colorHandle}>
                {
                    colors.map((v, i) => (
                        <option key={i} value={v}>{v}</option>
                    ))
                }
            </select>
            <button onClick={() => setColor(selectedColors)}>Show Colorino</button>
            
            <div className={styles.colorContainer}>
                {
                    color.map((v, i) => (
                        <div key={i} className={styles.colorBox} style={{backgroundColor: v}}></div>
                    ))
                }
            </div>
        </>
    )
}

const ColorApp = () => {
    return (
        <>
            <h3>Kleurboekje</h3>

            <ColorSelect/>
        </>
    )
}

export default ColorApp;