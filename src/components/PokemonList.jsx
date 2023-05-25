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
                    setNext(false)
                }
            })
            .catch(error => {
                console.log("Error getting data: ", error)
            });
    }, [offset])

    return (
        <div className="py-4">
            <h1 className="pokedex text-center text-5xl md:text-7xl text-gray-900">PokéDex</h1>
            <h3 className="pokedex text-center text-lg md:text-xl text-gray-600">Made using <a href="https://pokeapi.co" className=" text-blue-400">PokeApi</a></h3>
            <div className="flex flex-row justify-between py-2">
                <button onClick={() => setOffset(offset - 24)} className={offset === 0 ? 'hidden' : 'block' + 'inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none'}>Previous</button>
                <button></button>
                <button onClick={() => setOffset(offset + 24)} className="inline-flex items-center justify-center right px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">Next</button>
            </div>

            <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
                {pokemonList.map((pokemon, index) => (
                    <a href="#" key={pokemon.name} className="flex flex-col items-center px-1 sm:px-3 overflow-hidden bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-normal to-fire rounded-md">
                        <p className="name capitalize text-gray-50 text-xl">{pokemon.name}</p>
                        <div className="flex flex-row items-center justify-between w-full py-1 md:py-3">
                            <img className="xl:w-32 xl:h-32 md:w-28 md:h-28 sm:w-24 sm:h-24 w-16 h-16 z-10" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + offset + 1}.svg`} />
                            <span className="index -ml-12 lg:-ml-12 xl:-ml-9 z-0 font-bold tracking-wider text-white opacity-50  text-4xl md:text-6xl sm:text-5xl">#{(index + offset + 1).toString().padStart(3, '0')}</span>
                        </div>

                    </a>
                ))}
            </ul>


            <div className="flex flex-row justify-between py-2">
                <button onClick={() => setOffset(offset - 24)} className={offset === 0 ? 'hidden' : 'block' + 'inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none'}>Previous</button>
                <button></button>
                <button onClick={() => setOffset(offset + 24)} className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">Next</button>
            </div>
        </div>
    );
}

export default PokemonList;