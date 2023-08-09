<<<<<<< HEAD
import PokemonList from "../components/PokemonList";
import { Link } from "react-router-dom";

function Favourites() {
  const favourite = "favourites"; // Replace with your implementation
  return (
    <div className="favourites">
      <div className={`flex flex-row justify-between py-2`}>
        <Link
          to="/"
          className={
            "inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
          }
        >
          ← Go Back
        </Link>
        <button></button>
        <button className="hidden ">Next</button>
      </div>

      <span className="flex justify-center">Your Favourite Pokemons</span>
      <PokemonList query={favourite} /> {/* Update the component name if necessary */}
    </div>
  );
}

export default Favourites;
=======
import PokemonList from "../components/PokemonList";
import { Link } from "react-router-dom";

function Favourites() {
  const favourite = "favourites"; // Replace with your implementation
  return (
    <div className="favourites">
      <div className={`flex flex-row justify-between py-2`}>
        <Link
          to="/"
          className={
            "inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
          }
        >
          ← Go Back
        </Link>
        <button></button>
        <button className="hidden ">Next</button>
      </div>

      <span className="flex justify-center">Your Favourite Pokemons</span>
      <PokemonList query={favourite} /> {/* Update the component name if necessary */}
    </div>
  );
}

export default Favourites;
>>>>>>> c59c965d3bcea83a3edaeb1e640d6a0c18ef17cc
