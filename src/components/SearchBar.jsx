import { useState } from 'react';
import './search.css'
import pokemonData from '../data/list.json'
function Search() {
    const [filterText, setFilterText] = useState('');

    const handleInputChange = (event) => {
        setFilterText(event.target.value);
    };

    const filteredPokemon = pokemonData.pokemon.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(filterText.toLowerCase());
    }).slice(0,10);



    return (
        <>
            <div className="wave-group">
                <input type="text" className='input' value={filterText} onChange={handleInputChange} placeholder="Enter a Pokémon name" />
                <span className="bar"></span>
                <ul className={filterText === '' ? 'hidden' : 'block' + ' absolute z-30 w-full'}>
                    {filteredPokemon.map(pokemon => (
                        <li key={pokemon.name} className='capitalize name text-center py-1 border-gray-300 border bg-slate-200'>{pokemon.name}</li>
                    ))}
                    <li className='capitalize name text-blue-400 text-center py-1 border-gray-300 border bg-slate-200'>See All Results</li>
                </ul>
            </div>
        </>
    );
}



export default Search;