import { useState, useEffect } from "react";

function PokemonList() {
    const [pokemonList, setPokemonList] = useState([]);
    const [offset, setOffset] = useState(0);
    const [next, setNext] = useState(true)

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=24&offset=' + offset)
            .then(response => response.json())
            .then(data => {
                setPokemonList(data.results);
                if (data.next == null) {
                    setNext(
                        next = false
                    )
                }
            })
            .catch(error => {
                console.log("Error getting data: ", error)
            });
    }, [offset])

    return (
        <div>
            <h1>Pokemon List</h1>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {pokemonList.map((pokemon, index) => (
                    <a href="#" key={pokemon.name} className="flex flex-col items-center px-3 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-normal to-fire rounded-md">
                        <p className="name capitalize text-gray-50 text-xl">{pokemon.name}</p>
                        <div className="flex flex-row items-center">
                            <img class="md:w-32 md:h-32 w-24 h-24 z-10" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + offset + 1}.svg`} />
                            <span className="index md:-ml-24 -ml-16 z-0 font-bold tracking-wider text-white opacity-50 md:text-7xl text-6xl">#{(index + offset + 1).toString().padStart(3, '0')}</span>
                        </div>

                    </a>
                ))}
            </ul>

            <button onClick={() => setOffset(offset - 24)} className={offset === 0 ? 'hidden' : 'block'}>
                Previous
            </button>

            <button onClick={() => setOffset(offset + 24)} className={next === true ? 'block' : 'hidden'}>Next</button>
        </div>
    );
}

export default PokemonList;