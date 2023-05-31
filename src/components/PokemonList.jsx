import { useState, useEffect } from "react";
import Search from "./SearchBar";
import PokemonCard from "./PokemonCard";

function PokemonList() {
    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonDetails, setPokemonDetails] = useState([]);
    const [offset, setOffset] = useState(0);

    const getPokemon = async () => {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=24&offset=' + offset);
        const data = await res.json();
        setPokemonList(data.results);

        function getDetails(results) {
            results.forEach(async pokemon => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await res.json();
                setPokemonDetails(currentList => [...currentList, data])
            });
        }
        getDetails(data.results);
    }


    useEffect(() => {
        setPokemonDetails([]);
        // console.log("useeffent")
        getPokemon();
    }, [offset])


    return (
        <div className="py-4">
            <div className="flex items-center justify-center py-3 w-full">
                <Search></Search>
            </div>

            <div className="flex flex-row justify-between py-2">
                <button onClick={() => setOffset(offset - 24)} className={offset === 0 ? 'hidden' : 'block' + 'inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none'}>Previous</button>
                <button></button>
                <button onClick={() => setOffset(offset + 24)} className="inline-flex items-center justify-center right px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">Next</button>
            </div>

            <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
                {pokemonDetails.map((pokemon) => {
                    return (
                        <PokemonCard key={pokemon.name} pokemon={pokemon}></PokemonCard>
                        // <></>
                    )
                })}
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