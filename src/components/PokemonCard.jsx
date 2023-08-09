import getColor from "./resources/getColor";
import { PokemonContext } from "./resources/context/Context";
import { useContext } from "react";

function PokemonCard({ pokedex }) {
  const { favPokeIDList } = useContext(PokemonContext);
  return (
    <span className={`flex flex-col relative items-center px-1 sm:px-3 overflow-hidden bg-gradient-to-tl rounded-md cursor-pointer`} style={{ background: `linear-gradient(to bottom right,${getColor(pokedex.types[0].type.name)}, ${getColor(pokedex.types[pokedex.types.length - 1].type.name)})` }}>
      <p className="name capitalize text-gray-50 text-xl">{pokedex.name}</p>
      <div className="flex flex-row items-center justify-between w-full py-1 md:py-3">
        <img className="xl:w-32 xl:h-32 md:w-28 md:h-28 sm:w-24 sm:h-24 w-16 h-16 z-10" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokedex.id}.png`} />
        <span className="index -ml-12 lg:-ml-12 xl:-ml-9 z-0 font-bold tracking-wider text-white opacity-50  text-4xl md:text-6xl sm:text-5xl">#{String(pokedex.id).padStart(3, '0')}</span>
      </div>
      <span className={`absolute right-2 top-0 ${favPokeIDList.includes(pokedex.id) ? '' : 'hidden'}`}>
        ❤️
      </span>
    </span>
  );
}

export default PokemonCard;