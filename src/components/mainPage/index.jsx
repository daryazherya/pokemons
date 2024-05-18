import { useSelector } from "react-redux";
import Pokemon from "../Pokemon";


const MainPage = () => {
    const pokemons = useSelector(state => state.pokemons);

    return pokemons.map(pokemon => {
        return <Pokemon 
            id={pokemon.id}
            name={pokemon.name} 
            key={Number(pokemon.id)} 
        />
    })
}
 
export default MainPage;