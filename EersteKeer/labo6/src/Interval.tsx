import { useEffect, useState } from "react";

const InervalApp = () => {

    const Timer = () => {

        const [time, setTime] = useState<number>(0);

        useEffect(() => {
            let handle = setInterval(() => {
                setTime(prev => prev + 1)
            }, 1000);

            return() => {
                clearInterval(handle)
            }
        }, [])

        return (
            <>
                <h3>Timer</h3>

                <p>{time}</p>
            </>
        )
    }

    const CurrentTime = () => {

        const [time, setTime] = useState<Date>(new Date())

        useEffect(() => {            
            setInterval(() => {
                setTime(new Date());
            }, 1000);

            return() => {
                clearInterval;
            }
        }, [])




        return (
            <>
                <h3>Current time</h3>
                
                <p>{time.toLocaleTimeString()}</p>
            </>
        )
    }

    const RandomSmall = () => {
        
        const [number, setNumber] = useState<number>(0)

        useEffect(() => {

            let handle = setInterval(() => {
                setNumber(Math.floor(Math.random() * 100 + 1))
            }, 1000);

            return () => {
                clearInterval(handle);
            }
        }, [])

        return (
            <>
                <h3>Random small</h3>

                <p>Random value between 1 to 100: {number}</p>
            </>
        )

    }

    const RandomLarge = () => {
        const [number, setNumber] = useState<number>(0);

        useEffect(() => {
            let handle = setInterval(() => {
                setNumber(Math.floor(Math.random() * 100 + 100))
            }, 1000);

            return() => {
                clearInterval(handle);
            }
        }, [])

        return (
            <>
                <h3>Big random</h3>
            
                <p>Random v. between 100 to 200: {number}</p>
            </>
        )
    }

    return (
        <>
            <h3>Interval</h3>

            <Timer/>

            <CurrentTime></CurrentTime>

            <RandomSmall/>

            <RandomLarge/>
        </>
    )
}

export default InervalApp;