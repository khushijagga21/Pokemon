import React from "react";
import "./PokemonCard.css";

const PokemonCard = ({ name, image }) => {
  return (
    <div className="pokemon-card">
      <img src={image} alt={name} className="pokemon-image" />
      <h3 className="pokemon-name">{name}</h3>
    </div>
  );
};

export default PokemonCard;
