import './App.css';
import { PokemonProvider } from './components/PokemonProvider';
import PokemonsList from './components/PokemonList';
import CapturedPokemons from './components/CapturedPokemons';
import PokemonForm from './components/AddPokemonForm';

const App = () => (
  <PokemonProvider>
    <div className="App">
      <CapturedPokemons />
      <PokemonsList />
    </div>
    <div id='add-pokemon-form'>
      <PokemonForm />
    </div>
  </PokemonProvider>
);

export default App;
