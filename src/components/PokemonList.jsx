import { useState, useEffect } from "react";
import Search from "./SearchBar";

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
                };

            })
            .catch(error => {
                console.log("Error getting data: ", error)
            });
    }, [offset])

    function urlToId(url) {
        const regex = /\/(\d+)\/$/;
        const match = url.match(regex);
        
        if (match && match[1]) {
          return match[1];
        } else {
          return null; // Return null if the number is not found
        }
      }
      

    return (
        <div className="py-4">
            <h1 className="pokedex text-center text-5xl md:text-7xl text-gray-900">PokéDex</h1>
            <h3 className="pokedex text-center text-lg md:text-xl text-gray-600">Made using <a href="https://pokeapi.co" className=" text-blue-400">PokeApi</a></h3>

            <div className="flex items-center justify-center py-3 w-full">
            <Search></Search>
            </div>

            <div className="flex flex-row justify-between py-2">
                <button onClick={() => setOffset(offset - 24)} className={offset === 0 ? 'hidden' : 'block' + 'inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none'}>Previous</button>
                <button></button>
                <button onClick={() => setOffset(offset + 24)} className="inline-flex items-center justify-center right px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">Next</button>
            </div>

            <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
                {pokemonList.map((pokemon, index) => (
                    <a href="#" key={pokemon.name} className="flex flex-col items-center px-1 sm:px-3 overflow-hidden bg-gradient-to-tl from-dragon to-dark rounded-md">
                        <p className="name capitalize text-gray-50 text-xl">{pokemon.name}</p>
                        <div className="flex flex-row items-center justify-between w-full py-1 md:py-3">
                            <img className="xl:w-32 xl:h-32 md:w-28 md:h-28 sm:w-24 sm:h-24 w-16 h-16 z-10" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${urlToId(pokemon.url)}.png`} />
                            <span className="index -ml-12 lg:-ml-12 xl:-ml-9 z-0 font-bold tracking-wider text-white opacity-50  text-4xl md:text-6xl sm:text-5xl">#{(urlToId(pokemon.url)).toString().padStart(3, '0')}</span>
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