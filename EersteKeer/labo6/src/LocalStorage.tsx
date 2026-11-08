import { useEffect, useState } from "react";

interface Joke {
    id: string;
    joke: string;
    status:number;
}


const LocalApp = () => {

    const [fav, setFav] = useState<string>(localStorage.getItem("name") ?? "");
    const [joke, setJoke] = useState<string>("");
    const [trigger, setTrigger] = useState<boolean>(false)


    const DadJoke = () => {

        return (
            <>
                <h3>Joke</h3>
                <p>{joke}</p>
                <button onClick={() => setTrigger(prev => !prev)}>New Joke</button>
                <button onClick={() => setFav(joke)}>Fav</button>
                <p>{fav}</p>
            </>
        )
    }

    useEffect(() => {
        
        const fetchDad = async() => {
            let res = await fetch("https://icanhazdadjoke.com/", {
                headers: {
                    "accept": "application/json"
                }
            });
            let resData : Joke = await res.json();
            setJoke(resData.joke)
        }
        fetchDad();

    }, [trigger])

    return (
        <>
            <h3>LocalApp</h3>

            <DadJoke/>
        </>
    )
}

export default LocalApp;