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

export default Home;
