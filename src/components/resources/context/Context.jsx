import React, { createContext, useState, useEffect } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [favPokeIDList, setFavPokeIDList] = useState([]);
  const [favIDDetails, setFavIDDetails] = useState([]);

  useEffect(() => {
    const savedFavPokemons = localStorage.getItem("favIDList");
    if (savedFavPokemons) {
      setFavPokeIDList(JSON.parse(savedFavPokemons));
    }
    const savedFavIDDetails = localStorage.getItem("favIDDetails");
    if (savedFavIDDetails) {
      setFavIDDetails(JSON.parse(savedFavIDDetails));
    }
  }, []);

  const addToFavorites = (pokemon) => {
    setFavPokeIDList((prevList) => [...prevList, pokemon.id]);
    localStorage.setItem(
      "favIDList",
      JSON.stringify([...favPokeIDList, pokemon.id])
    );

    console.log("name: `${pokemon.name}`, url: `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`")

    localStorage.setItem(
      "favIDDetails",
      JSON.stringify([...favIDDetails, { name: `${pokemon.name}`, url: `https://pokeapi.co/api/v2/pokemon/${pokemon.id}` }])
    );

    console.log(localStorage.getItem("favIDList"));
  };



  const removeFromFavorites = (pokemon) => {
    setFavPokeIDList(favPokeIDList.filter((fav) => pokemon.id !== fav));
    localStorage.setItem(
      "favIDList",
      JSON.stringify(favPokeIDList.filter((fav) => pokemon.id !== fav))
    );
  };

  return (
    <PokemonContext.Provider
      value={{
        favPokeIDList,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
