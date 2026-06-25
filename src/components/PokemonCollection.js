import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon, search }) {
  const filteredPokemon = pokemon.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Card.Group itemsPerRow={6}>
      {filteredPokemon.map(poke => (
        <PokemonCard key={poke.id} pokemon={poke} />
      ))}
    </Card.Group>
  );
}

export default PokemonCollection;
