import React from "react";
import PokemonList from "../components/PokemonList"; // Import the PokemonList component
import { Link } from "react-router-dom";

function Favourites() {
  const favourite = "favourites"; // Placeholder for your favorite Pokemon data
  return (
    <div className="favourites">
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
        <button className="hidden">Next</button>
      </div>

      <span className="flex justify-center">Your Favourite Pokemons</span>
      {/* Render the PokemonList component with the 'favourite' query */}
      <PokemonList query={favourite} /> {/* Update the component name if necessary */}
    </div>
  );
}

export default Favourites;