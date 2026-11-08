import { useEffect, useState } from "react";

const CatApp = () => {

    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);
    const [trigger, setTrigger] = useState<boolean>(false);

    useEffect(() => {
        setX(Math.random() * window.innerWidth);
        setY(Math.random() * window.innerHeight);

    }, [trigger])

    return (
        <>
            <h3>Cat...</h3>

            <button onClick={() => setTrigger(prev => !prev)}>Refresh</button>
            <img style={{position: "absolute", top: x, left: y}}
                src={`${"https://cataas.com/cat?width=200&height=200"}`} alt="" />
        </>
    )
}

export default CatApp;