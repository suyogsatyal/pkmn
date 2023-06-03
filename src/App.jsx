import { Link, Route, Routes } from "react-router-dom";
import PokemonDetail from "./pages/PokemonDetail";
import SearchResult from "./pages/SearchResult";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="container min-h-screen">
        <div className="py-5">
          <h1 className="pokedex text-center text-5xl md:text-7xl text-gray-900"><Link to="/" href="#">PokéDex</Link></h1>
          <h3 className="pokedex text-center text-lg md:text-xl text-gray-600">Made using <a href="https://pokeapi.co" className=" text-red-500">Poke<span className=" text-yellow-400">Api</span></a></h3>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:query" element={<SearchResult />} />
            <Route path="*" element={<SearchResult />} />
            <Route path="/:name" element={<PokemonDetail />} />
          </Routes>
        </div>
      </div>
      <div className="footer relative bottom-0 w-full bg-slate-600 flex justify-center py-3 text-gray-100">Made By&nbsp; <a href="https://github.com/suyogsatyal"> Suyog</a> </div>
    </>
  )
}


export default App
