<<<<<<< HEAD
import PokemonList from "../components/PokemonList";
import Search from "../components/SearchBar";

function Home() {
    return (
        <>
            <div className="flex items-center justify-center py-3 w-full">
                <Search></Search>
            </div >
            <PokemonList query={null}/>
        </>
    );
}

=======
import PokemonList from "../components/PokemonList";
import Search from "../components/SearchBar";

function Home() {
    return (
        <>
            <div className="flex items-center justify-center py-3 w-full">
                <Search></Search>
            </div >
            <PokemonList query={null}/>
        </>
    );
}

>>>>>>> c59c965d3bcea83a3edaeb1e640d6a0c18ef17cc
export default Home;