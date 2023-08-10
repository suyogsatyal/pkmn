import React from "react";
import PokemonList from "../components/PokemonList"; // Import the PokemonList component
import { Link, useParams } from "react-router-dom";

function SearchResult() {
    const param = useParams(); // Get the URL parameters
    let query = param.query; // Extract the 'query' parameter from the URL

    return (
        <>
            <div className={`flex flex-row justify-between py-2`}>
                {/* Link to go back to the home page */}
                <Link
                    to="/"
                    className={
                        "inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                    }
                >
                    ← Go Back
                </Link>
                {/* Placeholder for buttons */}
                <button></button>
                <button className="hidden ">Next</button>
            </div>

            {/* Display the search query */}
            <span className=" flex justify-center">You searched for "{query}"</span>
            
            {/* Render the PokemonList component with the search query */}
            <PokemonList query={query}></PokemonList>
        </>
    );
}

export default SearchResult;