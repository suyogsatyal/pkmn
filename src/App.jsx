import { Link, Route, Routes } from "react-router-dom";
import PokemonDetail from "./pages/PokemonDetail";
import Home from "./pages/Home";

function App() {
  return (
    <div className="container">
      <div className="py-5">
        <h1 className="pokedex text-center text-5xl md:text-7xl text-gray-900"><Link to="/" href="#">PokéDex</Link></h1>
        <h3 className="pokedex text-center text-lg md:text-xl text-gray-600">Made using <a href="https://pokeapi.co" className=" text-blue-400">PokeApi</a></h3>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<PokemonDetail/>}/>
        </Routes>
      </div>

    </div>
  )
}


export default App
