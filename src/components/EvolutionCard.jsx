import { useEffect, useState } from "react";
import getColor from "./resources/getColor";
import Loading from "./Loading";

function EvolutionCard({ name }) {
    const [pkName, setPkName] = useState(name);
    const [pokedex, setPokedex] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPokedex = async () => {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + pkName);
            const data = await res.json();
            setPokedex(data);
            setLoading(false);
        }

        getPokedex();
    }, [pkName]);
    
    if (loading) {
        return <Loading />;
    }

    // Render the component after data is fetched
    return (
        <span className={`flex flex-col relative items-center px-1 sm:px-3 overflow-hidden bg-gradient-to-tl rounded-md cursor-pointer text-center`} style={{ background: `linear-gradient(to bottom right,${getColor(pokedex.types[0].type.name)}, ${getColor(pokedex.types[pokedex.types.length - 1].type.name)})` }}>
            <p className="name capitalize text-gray-50 text-base">#{String(pokedex.id).padStart(3, '0')} 
            <br />
            <span>{pokedex.name}</span></p>
            <div className="flex flex-row items-center justify-between w-full py-1 md:py-3">
                <img className="xl:w-32 xl:h-32 md:w-28 md:h-28 sm:w-24 sm:h-24 w-16 h-16 z-10" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokedex.id}.png`} alt={pokedex.name} />
            </div>
        </span>
    );
}


export default EvolutionCard;