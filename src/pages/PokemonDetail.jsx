import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import '../components/pattern.css'
import Left from '../assets/left.svg'
import Right from '../assets/right.svg'
import LeftW from '../assets/leftW.svg'
import RightW from '../assets/rightW.svg'

function PokemonDetail({ id }) {
    const param = useParams();
    const [pokedex, setPokedex] = useState({});
    const [species, setSpecies] = useState({});
    const [loader, setLoader] = useState(true);
    const navigate = useNavigate();
    const modifyFlavor = (str) => {
        return str.replace(/[\n\f]/g, ' ');
    };
    const baseURL = 'https://pokeapi.co/api/v2/pokemon/' + param.name;


    useEffect(() => {
        const getDetails = async () => {
            const res = await fetch(baseURL);
            if (res.status === 404) {
                setLoader(false);
                return (
                    <>
                        <span className="capitalize">{param.name}</span> doesn't exist.
                    </>
                );
            }
            const data = await res.json();
            setPokedex(data);
            getEvolution(data.species.url);
        }

        const getEvolution = async (url) => {
            const res = await fetch(url);
            const data = await res.json();
            setSpecies(data);
            setLoader(false);
        }
        getDetails();
        // setLoader(false);
    }, [baseURL])

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


    if (loader) {
        return (<Loading />)
    }

    return (
        <>
            <div className="flex flex-row justify-between">
                <Link onClick={() => navigate(-1)} className={'inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none'}>
                    ← Go Back
                </Link>
                <a className='inline-flex items-center justify-center px-4 py-2 text-base cursor-pointer font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none' onClick={() => {
                    navigate(`/${Math.floor(Math.random() * 1010)}`);
                    setLoader(true);
                }}
                >
                    Random
                </a>
            </div>
            <div className="container w-full ">
                <div className="pokemonDetailCard my-2 grid grid-cols-1 sm:grid-cols-8 gap-12 place-content-center relative">
                <div className="navigatePokemon hidden absolute sm:flex z-30 flex-row justify-between w-[120%] -left-8 lg:-left-16 top-2/4">
                                <div className="prev cursor-pointer" onClick={() => { setLoader(true); navigate(`/${pokedex.id - 1}`) }}>
                                    <img src={Left} alt="" srcset="" className="w-8 lg:w-12" />
                                </div>
                                <div className="next cursor-pointer" onClick={() => { setLoader(true); navigate(`/${pokedex.id + 1}`) }}>
                                    <img src={Right} alt="" srcset="" className="w-8 lg:w-12" />
                                </div>
                            </div>
                    <div className="flex flex-col col-span-8 sm:col-span-5 banner py-3 px-5 w-full text-gray-50 relative rounded-lg" style={{ background: `linear-gradient(to bottom right,${getColor(pokedex.types[0].type.name)}, ${getColor(pokedex.types[pokedex.types.length - 1].type.name)})` }}>
                        <div className="flex justify-between capitalize">
                            <div className="navigatePokemon flex absolute sm:hidden px-2 flex-row justify-between w-full left-0 top-2/4">
                            <div className="prev cursor-pointer" onClick={() => { setLoader(true); navigate(`/${(pokedex.id === 1) ? '' : pokedex.id - 1}`) }}>
                                    <img src={LeftW} alt="" srcset="" className="w-4" />
                                </div>
                                <div className="next cursor-pointer" onClick={() => { setLoader(true); navigate(`/${pokedex.id + 1}`) }}>
                                    <img src={RightW} alt="" srcset="" className="w-4" />
                                </div>
                            </div>
                            <span className="uppercase name text-lg md:text-3xl lg:text-4xl xl:text-5xl">{pokedex.name}</span>
                            <span className="name text-lg md:text-3xl lg:text-4xl xl:text-5xl">#{String(pokedex.id).padStart(3, '0')}</span>
                        </div>
                        <div className="flex justify-center">
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokedex.id}.png`} alt="" />
                        </div>
                        <div className="flex justify-center">
                            <span className="uppercase px-3 py-1 text-xs md:text-lg pokedex tracking-widest border sm:border-2 rounded-sm border-white">{pokedex.types[0].type.name}</span>
                            <span className="px-3"></span>
                            <span className={`uppercase px-3 py-1 text-xs md:text-lg pokedex tracking-widest border sm:border-2 rounded-sm border-white ${pokedex.types.length === 2 ? 'block' : 'hidden'}`}>{pokedex.types[pokedex.types.length - 1].type.name}</span>
                        </div>
                    </div>
                    <div className="pokemonDetailSidebar col-span-8 sm:col-span-3 py-3">
                        <div className="flex flex-col justify-around sm:justify-between name md:text-base xl:text-xl">
                            <span className="flex justify-between py-3 border-b border-gray-400">
                                <span>Weight</span>
                                <span>{pokedex.weight / 10 + ' kg'}</span>
                            </span>

                            <span className="flex justify-between py-3 border-b border-gray-400">
                                <span>Height</span>
                                <span>{pokedex.height / 10 + ' m'}</span>
                            </span>

                            <span className="flex justify-between py-3 border-b border-gray-400">
                                <span className="grid place-content-center">Held Items</span>
                                <span className="capitalize text-right">
                                    {(pokedex.held_items.length === 0) ? 'None' : `${pokedex.held_items[0].item.name}`}
                                    <br />

                                    <span className="capitalize">
                                        {(pokedex.held_items.length === 2) ? `${pokedex.held_items[1].item.name}` : ''}
                                    </span>

                                    {/* {(pokedex.held_items.length == 0)? 'None' : `${pokedex.held_items[0].item.name}`} */}
                                </span>
                            </span>

                            <div className="flex justify-between py-3 border-b border-gray-400">
                                <span>
                                    Default
                                    <img src={`${pokedex.sprites.front_default}`} alt='' className="-translate-x-3" />
                                </span>
                                <span className="text-right">
                                    <span>Shiny</span>
                                    <img src={`${pokedex.sprites.front_shiny}`} alt='' className="translate-x-3" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center py-4 name">
                    {modifyFlavor(species.flavor_text_entries[0].flavor_text)}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">


                    <div></div>
                </div>
            </div>
        </>
    );
}

export default PokemonDetail;