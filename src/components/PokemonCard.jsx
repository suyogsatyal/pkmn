function PokemonCard({pokemon}) {
    function getColor(type) {
        switch (type) {
          case 'fighting':
            return '#e25864';
          case 'flying':
            return '#6d87d6';
          case 'poison':
            return '#7a5292';
          case 'ground':
            return '#653f30';
          case 'rock':
            return '#6c6f77';
          case 'bug':
            return '#9bca7b';
          case 'ghost':
            return '#ddb3f4';
          case 'steel':
            return '#8f9498';
          case 'fire':
            return '#fb6c6c';
          case 'water':
            return '#76bdfe';
          case 'grass':
            return '#48d0b0';
          case 'electric':
            return '#ffce4b';
          case 'psychic':
            return '#f6a4db';
          case 'ice':
            return '#a0eaeb';
          case 'dark':
            return '#525264';
          case 'fairy':
            return '#ee509d';
          case 'normal':
            return '#b8b8b8';
          case 'dragon':
            return '#4169e1';
          default:
            return '';
        }
      }
      

    let types = "from-["+ getColor(pokemon.types[0].type.name) +"]"+ " to-[" + getColor(pokemon.types[pokemon.types.length-1].type.name) +"]";
    return (
        <a href="#" className={`flex flex-col items-center px-1 sm:px-3 overflow-hidden bg-gradient-to-tl rounded-md`} style={{background: `linear-gradient(to bottom right,${getColor(pokemon.types[0].type.name)}, ${getColor(pokemon.types[pokemon.types.length-1].type.name)})`}}>
            <p className="name capitalize text-gray-50 text-xl">{pokemon.name}</p>
            <div className="flex flex-row items-center justify-between w-full py-1 md:py-3">
                <img className="xl:w-32 xl:h-32 md:w-28 md:h-28 sm:w-24 sm:h-24 w-16 h-16 z-10" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} />
                <span className="index -ml-12 lg:-ml-12 xl:-ml-9 z-0 font-bold tracking-wider text-white opacity-50  text-4xl md:text-6xl sm:text-5xl">#{pokemon.id}</span>
            </div>
        </a>
    );
}

export default PokemonCard;