<<<<<<< HEAD
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import { PokemonContext } from '../components/resources/context/Context'

import Loading from "../components/Loading";
import PokemonImageCard from "../components/PokemonImageCard";
import PokemonDetailSidebar from "../components/PokemonDetailSidebar";

import GoBack from "../components/buttons/GoBack";

import Left from '../assets/left.svg'
import Right from '../assets/right.svg'
import LeftW from '../assets/leftW.svg'
import RightW from '../assets/rightW.svg'


function PokemonDetail({ id }) {
    const param = useParams();
    const [pokedex, setPokedex] = useState({});
    const [species, setSpecies] = useState({});
    const [evolution, setEvolution] = useState([]);
    const [evolutionTree, setEvolutionTree] = useState({});
    const [evolutionTreeId, setEvolutionTreeId] = useState([]);
    const [loader, setLoader] = useState(true);
    const [flavor, setFlavor] = useState('');
    const navigate = useNavigate();
    const [isClick, setClick] = useState(false);
    const modifyFlavor = (str) => {
        return str.replace(/[\n\f]/g, ' ');
    };
    const baseURL = 'https://pokeapi.co/api/v2/pokemon/' + param.name;

    const evol = async (chain) => {
        const initial = chain.species.name;
        const evolutions = [];
        const evos = [initial];

        chain.evolves_to.forEach((evolution) => {
            const firstEvolution = evolution.species.name;
            evos.push(firstEvolution);
            // const firstEvolutionId = evolution.species.url;
            // evosId.push(firstEvolutionId);


            if (evolution.evolves_to.length) {
                for (const secondEvolution of evolution.evolves_to) {
                    const second = secondEvolution.species.name;
                    // const secondId = secondEvolution.species.url;
                    evos.push(second);
                    // evosId.push(secondId);
                }
            }
        });

        const resolved = await Promise.all(evos.map((evolutionName) => Promise.resolve({ name: evolutionName })));
        // const resolvedId = await Promise.all(evosId.map((evolutionId) => Promise.resolve({ url: evolutionId })));

        // console.log(resolvedId)
        chain.evolves_to.map((evolution) => {
            const initialEvolution = resolved.find((pokemon) => pokemon.name === chain.species.name);
            // const initialEvolutionId = resolved.find((pokemon) => pokemon.url === chain.species.url);
            const firstEvolution = resolved.find((pokemon) => pokemon.name === evolution.species.name);
            // const firstEvolutionId = resolved.find((pokemon) => pokemon.url === evolution.species.url);
            const evolutionLine = [initialEvolution, firstEvolution];
            // const evolutionLineId = [initialEvolutionId, firstEvolutionId];
            // console.log(evolutionLineId)
            // console.log(evolutionLine)
            if (evolution.evolves_to.length) {
                for (const secondEvolution of evolution.evolves_to) {
                    const second = resolved.find((pokemon) => pokemon.name === secondEvolution.species.name);
                    // const secondId = resolved.find((pokemon) => pokemon.url === secondEvolution.species.url);
                    evolutions.push([...evolutionLine, second]);
                    // evolutionsId.push([...evolutionLineId, secondId]);
                }
            } else {
                evolutions.push(evolutionLine);
                // evolutionsId.push(evolutionLineId);
            }
            setEvolutionTree(evolutions);
            // setEvolutionTreeId(evolutionsId);
            // console.log(evolutionTreeId)
        });
    };



    useEffect(() => {
        setClick(false);
        const getDetails = async () => {
            const res = await fetch(baseURL);
            if (res.status === 404) {
                setLoader(false);
                return (
                    <>
                        <span className="capitalize">{param.name} doesn't exist.</span>
                    </>
                );
            }
            const data = await res.json();
            setPokedex(data);
            getSpecies(data.species.url);
        }

        const getSpecies = async (url) => {
            const res = await fetch(url);
            const data = await res.json();
            setSpecies(data);
            getEvolution(data.evolution_chain.url);
        }

        const getEvolution = async (url) => {
            // console.log(url);
            const res = await fetch(url);
            const data = await res.json();
            setEvolution(data);
            if (evolution) {
                evol(data.chain);
            }
            setLoader(false);
        }

        getDetails();
        // setLoader(false);
    }, [baseURL])

    useEffect(() => {
        if (species && species.flavor_text_entries && species.flavor_text_entries.length > 0) {
            for (let i = 0; i < species.flavor_text_entries.length; i++) {
                if (species.flavor_text_entries[i].language.name == 'en') {
                    setFlavor(modifyFlavor(species.flavor_text_entries[i].flavor_text));
                    break;
                };
            }
        }
    }, [species]);

    if (loader) {
        return (<Loading />)
    }
    else {
        return (
            <>
                <div className="flex flex-row justify-between">
                    <GoBack />
                    {/* <span onClick={setLoader(true)}> */}
                    <a className='inline-flex items-center justify-center px-4 py-2 text-base cursor-pointer font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none' onClick={() => {
                        navigate(`/${Math.floor(Math.random() * 1010)}`);
                        setLoader(true);
                    }}
                    >Random</a>
                </div>
                <div className="container w-full ">
                    <div className="pokemonDetailCard my-2 grid grid-cols-1 sm:grid-cols-8 gap-12 place-content-center relative">
                        <div className="navigatePokemon hidden absolute sm:flex z-30 flex-row justify-between w-[115%] lg:w-[120%] -left-8 lg:-left-16 top-2/4">
                            <div className="prev cursor-pointer" onClick={() => {
                                setLoader(true);
                                if (pokedex.id == 1) {
                                    navigate(`/`)
                                }
                                else if (pokedex.id == 10001) {
                                    navigate(`/1010`)
                                }
                                else {
                                    navigate(`/${pokedex.id - 1}`)
                                }
                            }}>
                                <img src={Left} alt="" srcSet="" className="w-8 lg:w-12" />
                            </div>
                            <div className="next cursor-pointer" onClick={() => {
                                setLoader(true);
                                if (pokedex.id == 1010) {
                                    navigate(`/10001`)
                                }
                                else {
                                    navigate(`/${pokedex.id + 1}`)
                                }
                            }}>
                                <img src={Right} alt="" srcSet="" className="w-8 lg:w-12" />
                            </div>
                        </div>
                        <div className="relative col-span-8 sm:col-span-5">
                            <PokemonImageCard pokedex={pokedex} >
                            </PokemonImageCard>
                            <div className="navigatePokemon flex absolute sm:hidden px-2 flex-row justify-between w-full left-0 top-2/4">
                                <div className="prev cursor-pointer" onClick={() => {
                                    setLoader(true); if (pokedex.id == 1) {
                                        navigate(`/`)
                                    }
                                    else if (pokedex.id == 10001) {
                                        navigate(`/1010`)
                                    }
                                    else {
                                        navigate(`/${pokedex.id - 1}`)
                                    }
                                }}>
                                    <img src={LeftW} alt="" srcSet="" className="w-8" />
                                </div>
                                <div className="next cursor-pointer" onClick={() => {
                                    setLoader(true);
                                    if (pokedex.id === 1010) {
                                        navigate("/10001");
                                    } else {
                                        navigate(`/${pokedex.id + 1}`);
                                    }
                                }}>

                                    <img src={RightW} alt="" srcSet="" className="w-8" />
                                </div>
                            </div>
                        </div>
                        <PokemonDetailSidebar pokedex={pokedex} species={species} />
                    </div>
                    <div className="text-center py-4 name">
                        {flavor}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 name">
                        <div>Evolution Line</div>

                        {evolutionTree.map((evolutionLine, index) => {
                            const pokemonItems = [];
                            pokemonItems.push(
                                <ul key={index} className="flex flex-row gap-4 capitalize border border-gray-600 rounded-md justify-evenly">
                                    {evolutionLine.map((pokemon, innerIndex) => {
                                        return(<li key={innerIndex} onClick={() => {setLoader(true);navigate(`/${pokemon.name}`)}} className=" cursor-pointer">{pokemon.name}</li>)
                                    }
                                    )}
                                </ul>
                            );
                            return pokemonItems;
                        })}


                    </div>
                </div>
            </>
        );
    }

}

=======
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import { PokemonContext } from '../components/resources/context/Context'

import Loading from "../components/Loading";
import PokemonImageCard from "../components/PokemonImageCard";
import PokemonDetailSidebar from "../components/PokemonDetailSidebar";

import GoBack from "../components/buttons/GoBack";

import Left from '../assets/left.svg'
import Right from '../assets/right.svg'
import LeftW from '../assets/leftW.svg'
import RightW from '../assets/rightW.svg'


function PokemonDetail({ id }) {
    const param = useParams();
    const [pokedex, setPokedex] = useState({});
    const [species, setSpecies] = useState({});
    const [evolution, setEvolution] = useState([]);
    const [loader, setLoader] = useState(true);
    const [flavor, setFlavor] = useState('');
    const navigate = useNavigate();
    const [isClick, setClick] = useState(false);
    const modifyFlavor = (str) => {
        return str.replace(/[\n\f]/g, ' ');
    };
    const baseURL = 'https://pokeapi.co/api/v2/pokemon/' + param.name;

    const evol = async (chain) => {
        const initial = (chain.species.name);
        const evolutions = [];

        const evos = [initial];

        // eslint-disable-next-line array-callback-return
        chain.evolves_to.map((evolution) => {
            const firstEvolution = (evolution.species.name);
            evos.push(firstEvolution);

            if (evolution.evolves_to.length) {
                for (const secondEvolution of evolution.evolves_to) {
                    const second = (secondEvolution.species.name);
                    evos.push(second);
                }
            }
        });
        // console.log(evos);

        const resolved = await Promise.all(evos);

        // eslint-disable-next-line array-callback-return
        chain.evolves_to.forEach((evolution) => {
            const initialEvolution = resolved.find(
                (pokemon) => pokemon.name === chain.species.name
            );
            const firstEvolution = resolved.find(
                (pokemon) => pokemon.name === evolution.species.name
            );
            const evolutionLine = [initialEvolution, firstEvolution];

            if (evolution.evolves_to.length) {
                for (const secondEvolution of evolution.evolves_to) {
                    const second = resolved.find(
                        (pokemon) => pokemon.name === secondEvolution.species.name
                    );
                    evolutions.push([...evolutionLine, second]);
                    // console.log(evolutions);
                }
            } else {
                evolutions.push(evolutionLine);
                // console.log(evolutions);
            }
        });

    };


    useEffect(() => {
        setClick(false);
        const getDetails = async () => {
            const res = await fetch(baseURL);
            if (res.status === 404) {
                setLoader(false);
                return (
                    <>
                        <span className="capitalize">{param.name} doesn't exist.</span>
                    </>
                );
            }
            const data = await res.json();
            setPokedex(data);
            getSpecies(data.species.url);
        }

        const getSpecies = async (url) => {
            const res = await fetch(url);
            const data = await res.json();
            setSpecies(data);
            getEvolution(data.evolution_chain.url);
        }

        const getEvolution = async (url) => {
            // console.log(url);
            const res = await fetch(url);
            const data = await res.json();
            setEvolution(data);
            if (evolution) {
                let i = 0;
                // console.log(data.chain.species.name);
                evol(data.chain);
            }
            setLoader(false);
        }

        getDetails();
        // setLoader(false);
    }, [baseURL])

    useEffect(() => {
        if (species && species.flavor_text_entries && species.flavor_text_entries.length > 0) {
            for (let i = 0; i < species.flavor_text_entries.length; i++) {
                if (species.flavor_text_entries[i].language.name == 'en') {
                    setFlavor(modifyFlavor(species.flavor_text_entries[i].flavor_text));
                    break;
                };
            }
        }
    }, [species]);

    if (loader) {
        return (<Loading />)
    }
    else {
        return (
            <>
                <div className="flex flex-row justify-between">
                    <GoBack />
                    {/* <span onClick={setLoader(true)}> */}
                    <a className='inline-flex items-center justify-center px-4 py-2 text-base cursor-pointer font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none' onClick={() => {
                        navigate(`/${Math.floor(Math.random() * 1010)}`);
                        setLoader(true);
                    }}
                    >Random</a>
                </div>
                <div className="container w-full ">
                    <div className="pokemonDetailCard my-2 grid grid-cols-1 sm:grid-cols-8 gap-12 place-content-center relative">
                        <div className="navigatePokemon hidden absolute sm:flex z-30 flex-row justify-between w-[115%] lg:w-[120%] -left-8 lg:-left-16 top-2/4">
                            <div className="prev cursor-pointer" onClick={() => {
                                setLoader(true);
                                if (pokedex.id == 1) {
                                    navigate(`/`)
                                }
                                else if (pokedex.id == 10001) {
                                    navigate(`/1010`)
                                }
                                else {
                                    navigate(`/${pokedex.id - 1}`)
                                }
                            }}>
                                <img src={Left} alt="" srcSet="" className="w-8 lg:w-12" />
                            </div>
                            <div className="next cursor-pointer" onClick={() => {
                                setLoader(true);
                                if (pokedex.id == 1010) {
                                    navigate(`/10001`)
                                }
                                else {
                                    navigate(`/${pokedex.id + 1}`)
                                }
                            }}>
                                <img src={Right} alt="" srcSet="" className="w-8 lg:w-12" />
                            </div>
                        </div>
                        <div className="relative col-span-8 sm:col-span-5">
                            <PokemonImageCard pokedex={pokedex} >
                            </PokemonImageCard>
                            <div className="navigatePokemon flex absolute sm:hidden px-2 flex-row justify-between w-full left-0 top-2/4">
                                <div className="prev cursor-pointer" onClick={() => { setLoader(true);  if (pokedex.id == 1) {
                                    navigate(`/`)
                                }
                                else if (pokedex.id == 10001) {
                                    navigate(`/1010`)
                                }
                                else {
                                    navigate(`/${pokedex.id - 1}`)
                                } }}>
                                    <img src={LeftW} alt="" srcSet="" className="w-8" />
                                </div>
                                <div className="next cursor-pointer" onClick={() => {
                                    setLoader(true);
                                    if (pokedex.id === 1010) {
                                        navigate("/10001");
                                    } else {
                                        navigate(`/${pokedex.id + 1}`);
                                    }
                                }}>

                                    <img src={RightW} alt="" srcSet="" className="w-8" />
                                </div>
                            </div>
                        </div>
                        <PokemonDetailSidebar pokedex={pokedex} species={species} />
                    </div>
                    <div className="text-center py-4 name">
                        {flavor}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div></div>
                    </div>
                </div>
            </>
        );
    }

}

>>>>>>> c59c965d3bcea83a3edaeb1e640d6a0c18ef17cc
export default PokemonDetail;