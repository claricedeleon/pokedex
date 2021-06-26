import './Pokemon.css';
import Card from './Card'

const Pokemon = (props) => {
    return (
        <div className='pokemon'>
            {
                props.pokemon.map(pokemon => {
                    return <Card pokemon={pokemon} />
                })
            }

        </div>
    )
}

export default Pokemon