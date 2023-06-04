import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";
import '../components/pattern.css'

function PokemonDetail({ id }) {
    const param = useParams();
    const [pokedex, setPokedex] = useState({});
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        const getDetails = async () => {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + param.name);
            const data = await res.json();
            setPokedex(data);
            setLoader(false);
            getEvolution(data.id);
        }

        const getEvolution = async (id) => {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon-species/' + id);
            const data = await res.json();
            fetch(data.evolution_chain.url)
                .then(response => response.json())
            // .then(newData => console.log(newData))
        }
        getDetails();

    }, [])

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


    // console.log(pokedex.types[0].type.name);
    if(loader){
        return(<Loading />)
    }

    return (
        <>
            <Link to="/" className={'inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none'}>
                ← Go Back
            </Link>
            <div className=" my-2 container">
                <div className="flex flex-col banner py-3 px-5 w-full text-gray-50" style={{ background: `linear-gradient(to bottom right,${getColor(pokedex.types[0].type.name)}, ${getColor(pokedex.types[pokedex.types.length - 1].type.name)})`}}>
                    <div className="flex justify-between capitalize">
                        <span className="uppercase name text-lg md:text-3xl lg:text-5xl">{pokedex.name}</span>
                        <span className="name text-lg md:text-3xl lg:text-5xl">#{String(pokedex.id).padStart(3, '0')}</span>
                    </div>
                    <div className="flex justify-center">
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokedex.id}.png`} alt="" />
                    </div>
                    <div className="flex justify-center">
                        <span className="uppercase px-3 py-1 text-xs md:text-lg pokedex tracking-widest border sm:border-2 rounded-sm border-white">{pokedex.types[0].type.name}</span>
                        <span className="px-3"></span>
                        <span className={`uppercase px-3 py-1 text-xs md:text-lg pokedex tracking-widest border sm:border-2 rounded-sm border-white ${pokedex.types.length ===2? 'block' : 'hidden'}`}>{pokedex.types[pokedex.types.length -1].type.name}</span>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default PokemonDetail;