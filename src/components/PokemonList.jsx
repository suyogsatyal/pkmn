import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import PokemonDetail from "../pages/PokemonDetail";
import pokemonData from '../data/list.json';
import { Link } from "react-router-dom";
import Loading from "./Loading";

function PokemonList({ query }) {
    const [pokemonList, setPokemonList] = useState([]);
    const [loader, setLoader] = useState('hidden')
    const [pokemonDetails, setPokemonDetails] = useState([]);
    const [offset, setOffset] = useState(0);

    const getPokemon = async () => {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=24&offset=' + offset);
        const data = await res.json();
        setPokemonList(data.results);
        if (query !== null) { 
            const filteredPokemon = pokemonData.pokemon.filter(pokemon => {
                return pokemon.name.toLowerCase().includes(query.toLowerCase());
            })
            setPokemonList(filteredPokemon);
            getDetails(filteredPokemon);
        }
        else{
            getDetails(data.results);
        }
        

        async function getDetails(results) {
            try {
                const fetchPromises = results.map(pokemon => fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).then(res => res.json()));
                const pokemonDetails = await Promise.all(fetchPromises);
                setPokemonDetails(currentList => [...currentList, ...pokemonDetails]);
                setLoader('hidden');
            } catch (error) {
                // Handle error if any fetch fails
                console.error(error);
            }
        }

    }


    useEffect(() => {
        setLoader('block');
        setPokemonDetails([]);
        getPokemon();
    }, [offset])


    return (
        <>
            <span className={`loader ${loader}`}>
                <Loading></Loading>
            </span>
            <div className="py-4">

                <div className={`flex flex-row justify-between py-2 ${query===null? 'block' : 'hidden'}`}>
                    <button onClick={() => setOffset(offset - 24)} className={offset === 0 ? 'hidden' : 'block' + 'inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none'}>Previous</button>
                    <button></button>
                    <button onClick={() => setOffset(offset + 24)} className="inline-flex items-center justify-center right px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">Next</button>
                </div>

                <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
                    {pokemonDetails.map((pokemon, index) => {
                        return (
                            <Link to={`/${pokemon.name}`} element={<PokemonDetail />} key={pokemon.name}>
                                <PokemonCard pokemon={pokemon} />
                            </Link>
                        )
                    })}
                </ul>


                <div className={`flex flex-row justify-between py-2 ${query===null? 'block' : 'hidden'}`}>
                    <button onClick={() => setOffset(offset - 24)} className={offset === 0 ? 'hidden' : 'block' + 'inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none'}>Previous</button>
                    <button></button>
                    <button onClick={() => setOffset(offset + 24)} className="inline-flex items-center justify-center right px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">Next</button>
                </div>
            </div>
        </>
    );
}

export default PokemonList;