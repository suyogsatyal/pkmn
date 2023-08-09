import { useEffect, useState, useContext } from "react";
import getColor from "./resources/getColor"
import Heart from "react-animated-heart";

import { PokemonContext } from "./resources/context/Context";

function PokemonImageCard({ pokedex }) {
    const [isClick, setClick] = useState();
    const { favPokeIDList, addToFavorites, removeFromFavorites } = useContext(PokemonContext);

    useEffect(()=>{
        const isFav = favPokeIDList.includes(pokedex.id);
        if(isFav == true){
            setClick(true);
        }
        else{
            setClick(false);
        }
    },[pokedex])

    function handleLike(pokedex){
        // console.log(pokedex.id);
        (favPokeIDList.includes(pokedex.id))? removeFromFavorites(pokedex) : addToFavorites(pokedex) ;
    }
    return (
        <PokemonContext.Consumer>
          {() => (
            <div className="grid banner py-3 px-5 w-full text-gray-50 relative rounded-lg overflow-hidden" style={{ background: `linear-gradient(to bottom right,${getColor(pokedex.types[0].type.name)}, ${getColor(pokedex.types[pokedex.types.length - 1].type.name)})` }}>
              <div className="flex justify-between capitalize">
                <span className="uppercase name text-lg md:text-3xl lg:text-4xl xl:text-5xl">{pokedex.name}</span>
                <span className="name text-lg md:text-3xl lg:text-4xl xl:text-5xl">#{String(pokedex.id).padStart(3, '0')}</span>
              </div>
              <div className="flex justify-center">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokedex.id}.png`} alt="" className="xl:max-w-[400px] xl:max-h-[400px]" />
              </div>
              <div className="flex justify-center">
                <span className="uppercase px-3 py-1 mx-3 text-xs md:text-lg pokedex tracking-widest border sm:border-2 rounded-sm border-white backdrop-opacity-10 bg-white/10">{pokedex.types[0].type.name}</span>
                <span className={`uppercase px-3 py-1 mx-3 text-xs md:text-lg pokedex tracking-widest border sm:border-2 rounded-sm border-white backdrop-opacity-10 bg-white/10 ${pokedex.types.length === 2 ? 'block' : 'hidden'}`}>{pokedex.types[pokedex.types.length - 1].type.name}</span>
              </div>
              <div className="grid place-content-center max-w-7xl max-h-7xl absolute -bottom-5 -right-4 overflow-hidden" onClick={() => { handleLike(pokedex) }}>
                <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
              </div>
            </div>
          )}
        </PokemonContext.Consumer>
      );
      
}

export default PokemonImageCard