import { useState } from "react"

const OmhoogApp = () => {
    const [count , setCount] = useState<number>(0);

    const yep = () => {
        let color : string = "white"

        if (count > 0) {
            color = "green"
        } else if (count < 0) {
            color = "red"
        } else {
            color = "white"
        }

        return color;
    }

    const Counter = () => {
        return (
            <div style={{display: "flex", justifyContent: "center", gap: "1em"}}>
                <button onClick={() => setCount(prev => prev + 1)}>Omhoog!</button>
                <p style={{color: yep()}}>{count}</p>
                <button onClick={() => setCount(prev => prev - 1)}>Omlaag!</button>
            </div>
        )
    }

    return (
        <>
            <h3>Omhoog</h3>

            <Counter/>
        </>
    )
}

export default OmhoogApp;