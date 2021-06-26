import './Card.css';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'

const Card = ({ pokemon }) => {
    return (
        <div className='card'>
            <Link to={'/Types/' + pokemon.types + '/' + pokemon.name}>
                <h3>{pokemon.name}</h3>
                <img src={pokemon.img} id="pokemon-img" />
            </Link>
            <div>
                {
                    pokemon.types.map(type => <h5>{type}</h5>)
                }
            </div>
            <Route exact path={'/Types/' + pokemon.types[0] + '/' + pokemon.name}>
                <div className='description'>
                    <p>{pokemon.Description}</p>
                </div>
            </Route>
        </div>
    )
}

export default Card