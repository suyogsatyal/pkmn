import { data } from "autoprefixer";
import PokemonList from "./components/PokemonList";

function App() {
  return (
    <div className="container">
      <div className="py-5">
        <h1 className="pokedex text-center text-5xl md:text-7xl text-gray-900"><a href="#">PokéDex</a></h1>
        <h3 className="pokedex text-center text-lg md:text-xl text-gray-600">Made using <a href="https://pokeapi.co" className=" text-blue-400">PokeApi</a></h3>
        <PokemonList></PokemonList>
      </div>

    </div>
  )
}


export default App
