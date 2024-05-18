import { useDispatch, useSelector } from 'react-redux';
import './index.scss';


const Pokemon = ({id, name }) => {
    const pokemonIds = useSelector(state => state.pokemonIds);
    const dispatch = useDispatch();

    return <div className={ pokemonIds.includes(id) ? 'pokemon-catched' : 'pokemon-free'}>
        <p 
        style={{margin: 0}} 
        >
            {name} #{id}
        </p>
        <img 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} 
            alt={name} 
            width='80px' 
            height='80px' 
        />
        <button 
            onClick={() => {
                dispatch({type: 'CATCH_POKEMON', id})
            }}
        >
            {pokemonIds.includes(id) ? 'Отпустить' : 'Поймать'}
        </button>
    </div> 
}
 
export default Pokemon;


