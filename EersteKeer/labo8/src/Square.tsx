import { useContext, useState } from "react"
import styles from "./css.module.css"
import { SquareContext } from "./Context/Square"

const SquareApp = () => {

    const Square = () => {
        const {color, setColor} = useContext(SquareContext)

        const colors = ["red", "blue", "green"];
        const handleClick = () => {
            const index = colors.indexOf(color);
            const nextIndex = (index + 1) % colors.length;
            setColor(colors[nextIndex]);
        }

        return (
            <div className={styles.square} style={{backgroundColor: color}} onClick={handleClick}>

            </div>
        )
    }

    const SquareRow = () => {

        return (
            <>
                <Square></Square>
                <Square></Square>
                <Square></Square>
            </>
        )
    }

    const SelectionBox = () => {
        const {color, setColor} = useContext(SquareContext)

        return (
            <>
                <select name="color" id="color" value={color} onChange={(e) => setColor(e.target.value)}>
                    <option value="red">red</option>
                    <option value="blue">blue</option>
                    <option value="green">green</option>
                </select>
            </>
        )
    }

    return (
        <>
            <h3>Squared</h3>

            <SelectionBox/>
            <SquareRow/>
        </>
    )
}

export default SquareApp;