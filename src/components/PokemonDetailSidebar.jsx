
function PokemonDetailSidebar ({pokedex, species}){
    return(
        <div className="pokemonDetailSidebar col-span-8 sm:col-span-3 py-3 text-gray-700">
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

                                <span className="flex justify-between py-3 border-b border-gray-400">
                                    <span>Habitat</span>
                                    <span className="capitalize">{(species.habitat == null) ? 'Null' : species.habitat.name}</span>
                                </span>
                                <span className="flex justify-between py-3 border-b border-gray-400">
                                    <span className="grid place-content-center">Ability</span>
                                    <span className="capitalize text-right">
                                        {(pokedex.abilities.length === 0) ? 'None' : `${pokedex.abilities[0].ability.name}`}
                                        <br />
                                        <span className="capitalize">
                                            {(pokedex.abilities.length === 2) ? `${pokedex.abilities[1].ability.name}` : ''}
                                        </span>
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
    )
}

export default PokemonDetailSidebar;