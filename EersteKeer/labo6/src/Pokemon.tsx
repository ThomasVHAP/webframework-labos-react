import { useEffect, useState } from "react";

interface PokedexProp {
    pokemon: Pokemon[];
    loading: boolean;
    setIndex: (n: number) => void
}

interface Pokemon {
    name: string;
    url: string;
}

interface ResPokemon {
    count: number;
    next: string;
    previous: null;
    results: Pokemon[];
}

const Pokedex = ({setIndex, pokemon, loading} : PokedexProp) => {
    
    const [filter, setFilter] = useState<string>("");
    const [number, setNumber] = useState<number>(151);

    const filteredPokemon = pokemon.filter((p) =>
        p.name.toLowerCase().startsWith(filter.toLowerCase())
    );  

    return (
        <>
            {
                loading === true ? <div>AAAAAAAAAAAAAAAAA</div> : 
                <>
                    <input type="text" onChange={(e) => setFilter(e.target.value)}/>
                    {
                        filteredPokemon.map((v, i) => (
                            <div key={i}>
                                <p>{v.name}</p>
                            </div>
                    ))
                    }
                    <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))}/>
                    <button onClick={() => setIndex(number)}>Set limit</button>

                </>
            }
        </>
    )
}

const PokemonApp = () => {
    const [index, setIndex] = useState<number>(151);
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const Pokefetch = async () => {
            setLoading(true);
            try {
                let res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=20&limit=${index}`);
                if (!res.ok) {
                    throw new Error(`fetch failed. ${res.status}, ${res.statusText}`);
                }
                let data: ResPokemon = await res.json();
                setPokemon(data.results);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        
        Pokefetch();
    }, [index]);

    return (
        <>
            <h3>Pokemon Time</h3>
            <Pokedex setIndex={setIndex} pokemon={pokemon} loading={loading}></Pokedex>
        </>
    )
}

export default PokemonApp;