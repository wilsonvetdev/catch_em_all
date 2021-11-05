import './App.css';
import { PokemonProvider } from './components/PokemonProvider';
import PokemonsList from './components/PokemonList';
import CapturedPokemons from './components/CapturedPokemons';

const App = () => (
  <PokemonProvider>
    <div className="App">
      <CapturedPokemons />
      <PokemonsList />
    </div>
  </PokemonProvider>
);

export default App;
