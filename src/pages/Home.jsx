import React from "react";
import PokemonList from "../components/PokemonList"; // Import the PokemonList component
import Search from "../components/SearchBar"; // Import the SearchBar component

function Home() {
    return (
        <>
            {/* Render the SearchBar component */}
            <div className="flex items-center justify-center py-3 w-full">
                <Search></Search>
            </div>

            {/* Render the PokemonList component with 'null' query */}
            <PokemonList query={null}/>
        </>
    );
}

export default Home;
