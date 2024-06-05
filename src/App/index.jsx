import MainPage from "../components/mainPage";
import './index.scss';
import { useEffect } from "react";
import { fetchPokemons } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import PaginationSection from "../components/Pagination/PaginationSection";
import SelectSizePage from "../components/SelectSizePage/SelectSizePage";
import { getAllPokemons } from "../redux/getAllPokemons";


function App() {
    
    // const [ pokemonIds, setPokemonIds ] = useState(() => localStorage.getItem('pokemonIds') ? JSON.parse(localStorage.getItem('pokemonIds')) : []);
    const pokemonIds = useSelector(state => state.pokemonIds);
    const count = useSelector(state => state.pagination.count);
    const dispatch = useDispatch();  
    
    useEffect(() => {
        // getAllPokemons(pageNumber,pageSize)(dispatch)
        dispatch(getAllPokemons(5, 18))
        
    },[dispatch]) 


    return (
        <main className="main">
            <div className="counter">
                Caught Pokemons: {pokemonIds.length}/{count} 
            </div>
            <SelectSizePage/>
            <div className="wrapper">
                <MainPage/>
            </div>
            <PaginationSection/>
        </main>
    );
}

export default App;
