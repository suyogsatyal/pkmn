import { useState } from 'react';
import './search.css'
import pokemonData from '../data/list.json'
import PokemonDetail from '../pages/PokemonDetail';
import { Link } from 'react-router-dom';
import SearchResult from '../pages/SearchResult';
function Search() {
    const [filterText, setFilterText] = useState('');

    const handleInputChange = (event) => {
        setFilterText(event.target.value);
        if (event.key === "Enter") {
            console.log(filterText)
        }

    };

    const filteredPokemon = pokemonData.pokemon.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(filterText.toLowerCase());
    }).slice(0, 10);



    return (
        <>
            <div className="wave-group">
                <input type="text" className='input' value={filterText} onKeyDown={handleInputChange} onChange={handleInputChange} placeholder="Enter a Pokémon name" ></input>
                <span className="bar"></span>
                <ul className={filterText === '' ? 'hidden' : 'block' + ' absolute z-30 w-full'}>
                    {filteredPokemon.map(pokemon => (
                        <li key={pokemon.name} className='capitalize name w-full text-center py-1 border-gray-300 border bg-slate-200 overflow-hidden'>
                            <Link to={`/${pokemon.name}`} element={<PokemonDetail />} className=' px-64 py-3'>
                                {pokemon.name}
                            </Link>
                        </li>
                    ))}
                    <li className='capitalize name w-full text-blue-400 text-center py-1 border-gray-300 border bg-slate-200 overflow-hidden'>
                        <Link to={`/search=${filterText}`} element={<SearchResult/>} className=' px-64 py-3'>See All Results</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}



export default Search;