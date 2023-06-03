import PokemonList from "../components/PokemonList";
import { useParams } from "react-router-dom";

function SearchResult() {
    const param = useParams();
    let query = param.query;
    console.log('searchresut')
    return ( <> You searched for {query}
        <PokemonList query={query}></PokemonList>
    </> );
}

export default SearchResult;