import PokemonList from "../components/PokemonList";
import { Link, useParams } from "react-router-dom";

function SearchResult() {
    const param = useParams();
    let query = param.query;
    return (<>
        <div className={`flex flex-row justify-between py-2`}>
            <Link to="/" className={'inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none'}>
                ← Go Back
            </Link>
            <button></button>
            <button className="hidden ">Next</button>
        </div>

        <span className=" flex justify-center">You searched for "{query}"</span>
        <PokemonList query={query}></PokemonList>
    </>);
}

export default SearchResult;