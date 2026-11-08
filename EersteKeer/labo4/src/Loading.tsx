import { useEffect, useState } from "react";
import {ColorRing} from "react-loader-spinner"

const LoadingApp = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const [spinner, setSpinner] = useState<Boolean>(false);

    useEffect(() => {
        let timer : number;
        
        if (loading === true) {
            setSpinner(true)
            timer = setTimeout(() => {
                setSpinner(false);
                setLoading(false)
            }, 3000);
        }        

        return () => (
            clearTimeout(timer)
        )
    }, [loading])

    return (
        <>
            <h3>Loading grrr</h3>

            <button onClick={() => setLoading(true)}>Test</button>
            {
                spinner && <ColorRing/>
            }
        </>
    )
}

export default LoadingApp;