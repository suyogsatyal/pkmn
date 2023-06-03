import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pokemonData from '../data/list.json'
import PokemonList from "../components/PokemonList";

function SearchResult() {
    const param = useParams();
    let query = param.query;
    console.log('searchresut')
    return ( <> You searched for {query}
        <PokemonList></PokemonList>
    </> );
}

export default SearchResult;