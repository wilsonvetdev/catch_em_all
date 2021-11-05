import React, { useContext } from 'react';
import { PokemonContext } from './PokemonProvider';

const CapturedPokemons = () => {
  const { capturedPokemons, release } = useContext(PokemonContext);

  return (
    <div className="pokedex">
      <h2>CapturedPokemons</h2>

      {capturedPokemons.map((pokemon) =>
        <div key={`${pokemon.id}-${pokemon.name}`}>
          <span>{pokemon.name}</span>
          <button onClick={release(pokemon)}>-</button>
        </div>)}
    </div>
  )
};

export default CapturedPokemons;
