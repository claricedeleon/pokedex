import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import NavLinks from './components/NavLinks';
import Pokemon from './components/Pokemon';


const App = ({ types, pokemons }) => {
  return (
    <div className="App">
      <h1>Pokédex | Pokemon</h1>
      <div className="contents">

        <div className="nav-links">
          <Route path='/'>
            <NavLinks types={types} />
          </Route>
        </div>

        <div className="characters">
          {
            types.map(type => {
              let filteredPokemons = pokemons.filter(pokemon => {
                return pokemon.types.includes(type)
              })
              return (
                <Route path={'/Types/' + type}>
                  <Pokemon pokemon={filteredPokemons} />
                </Route>)
            })
          }
        </div>

      </div>

    </div>
  )
}

const mapSTateToProps = state => {
  return {
    types: state.types,
    pokemons: state.pokemons
  }
}

export default connect(mapSTateToProps)(App);
