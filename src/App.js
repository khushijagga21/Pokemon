import React, { useState, useEffect } from "react";
import { fetchPokemons } from "./Services/api"
import PokemonCard from "./components/PokemonCard";
import SearchBar from "./components/SearchBar";
import "./App.css";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemons(50);
      const detailedData = await Promise.all(
        data.map(async (pokemon) => {
          const details = await fetch(pokemon.url).then((res) => res.json());
          return {
            name: pokemon.name,
            image: details.sprites.front_default,
          };
        })
      );
      setPokemons(detailedData);
      setFilteredPokemons(detailedData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    setFilteredPokemons(
      pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchQuery)
      )
    );
  }, [searchQuery, pokemons]);

  return (
    <div className="app">
      <h1>Pokédex</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="pokemon-grid">
        {filteredPokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            image={pokemon.image}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
