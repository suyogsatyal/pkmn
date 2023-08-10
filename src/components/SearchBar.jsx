import React, { useState } from 'react';
import './search.css'
import pokemonData from '../data/list.json'
import PokemonDetail from '../pages/PokemonDetail';
import { Link, useNavigate } from 'react-router-dom';
import SearchResult from '../pages/SearchResult';
import Favourite from '../pages/Favourites';

function Search() {
    const [filterText, setFilterText] = useState('');
    const navigate = useNavigate();

    // Function to check if a string contains only numbers
    const isStringOnlyNumbers = (str) => /^\d+$/.test(str);

    const handleInputChange = (event) => {
        setFilterText(event.target.value);

        // If Enter key is pressed, navigate based on input
        if (event.key === "Enter") {
            event.preventDefault();
            
            // If input is a number, navigate to the Pokemon's details page
            if (isStringOnlyNumbers(filterText)) {
                navigate(`/${filterText}`);
            } else {
                navigate(`/search/${filterText}`);
            }
        }
    };

    // Filter Pokemon names based on input
    const filteredPokemon = pokemonData.pokemon.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(filterText.toLowerCase());
    }).slice(0, 10);

    return (
        <>
            <div className="wave-group">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
                    {/* Input field */}
                    <input type="text" className='input' value={filterText} onKeyDown={handleInputChange} onChange={handleInputChange} placeholder="Enter a Pokémon name or ID" ></input>
                    
                    {/* Buttons */}
                    <div className='flex flex-row justify-around gap-2'>
                        <a className='inline-flex items-center justify-center px-4 py-2 text-base cursor-pointer font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none' onClick={() => { navigate(`/search/${filterText}`)}}>Search</a>
                        
                        <a className='inline-flex items-center justify-center px-4 py-2 text-base cursor-pointer font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none' onClick={() => { navigate(`/${Math.floor(Math.random() * 1010)}`)}}>Random</a>
                        
                        <Link to={`/favourites`} element={<Favourite/>} className='inline-flex items-center justify-center px-4 py-2 text-base cursor-pointer font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none'>❤️</Link>
                    </div>
                </div>
                <span className="bar"></span>
                {/* Display filtered Pokemon suggestions */}
                <ul className={filterText === '' ? 'hidden' : 'block' + ' absolute z-30 w-full sm:translate-y-0 -translate-y-[54px]'}>
                    {filteredPokemon.map(pokemon => (
                        <li key={pokemon.name} className='capitalize name w-full text-center py-1 border-gray-300 border bg-slate-200 overflow-hidden'>
                            <Link to={`/${pokemon.name}`} element={<PokemonDetail />} className=' py-3'>
                                {pokemon.name}
                            </Link>
                        </li>
                    ))}
                    {/* Link to see all search results */}
                    <li className='capitalize name w-full text-blue-400 text-center py-1 border-gray-300 border bg-slate-200 overflow-hidden'>
                        <Link to={`/search/${filterText}`} element={<SearchResult />} className=' py-3'>See All Results</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Search;
