import { useEffect, useState } from "react";
import { AlienData, type Alien } from "./data";

const Aliens = () => {

    const [data, setData] = useState<Alien[]>(AlienData)
    const [alienArray, setAlienArray] = useState<string[]>([])

    const handleAlien = (v : Alien) => {
        setAlienArray([...alienArray, v.human])
    }

    const handleDelete = () => {
        setAlienArray([]);
    }
    
    const handleDeleteOne = () => {
        setAlienArray((prev) => prev.toSpliced(-1, 1))
    }

    return (
        <>
            <h3>Alien</h3>

            {
                data.map((v, i) => (
                    <button key={i} value={v.human} onClick={() => handleAlien(v)}>
                        <img src={v.alien} alt={v.human} />
                    </button>
                ))                
            }

            <button onClick={handleDeleteOne}>Remove 1</button>
            <button onClick={handleDelete}>Clear!</button>

            <>
                <p>{alienArray}</p>
            </>
        </>
    )
}

export default Aliens;