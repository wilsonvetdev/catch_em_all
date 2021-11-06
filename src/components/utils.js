import Pokemon from './Pokemon';

export const CAPTURE = 'CAPTURE';
export const RELEASE = 'RELEASE';
export const ADD_POKEMON = 'ADD_POKEMON';
export const ADD_POKEMONS = 'ADD_POKEMONS';

export const listPokemons = ({ pokemons, onClick, buttonLabel }) =>
  pokemons.map((pokemon) => (
    <Pokemon pokemon={pokemon} onClick={onClick} buttonLabel={buttonLabel} />
  ));

export const generateID = () => {
  const a = Math
    .random()
    .toString(36)
    .substring(2, 15)

  const b = Math
    .random()
    .toString(36)
    .substring(2, 15)

  return a + b;
};

export const url = "https://pokeapi.co/api/v2/pokemon";
