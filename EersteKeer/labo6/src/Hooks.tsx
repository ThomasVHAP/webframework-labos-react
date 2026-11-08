import { useEffect, useState } from "react";
import styles from "./css.module.css"

const DelayApp = () => {

    const [trigger, setTrigger] = useState<boolean>(true);
    const [delay, setDelay] = useState<number>(1000);
    const [time, setTime] = useState<number>(0);

    useEffect(() => {
        if (!trigger) return;

        let handle = setInterval(() => {
            setTime(prev => prev + 1)
        }, delay);


        return () => {
            clearInterval(handle);
        }
    }, [trigger, delay])

    return (
        <>
            <h3>Delay time</h3>

            <p>Counter = {time}</p>
            <input type="number" value={delay} onChange={(e) => setDelay(Number(e.target.value))}/>
            <div className={styles.buttonBox}>
                <button onClick={() => setTrigger(false)}>Pause</button>
                <button onClick={() => setTrigger(true)}>Resume</button>
            </div>
        </>
    )
}

export default DelayApp;