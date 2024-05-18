import MainPage from "../components/mainPage";
import './index.scss';
import { useEffect } from "react";
import { fetchPokemons } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import PaginationSection from "../components/Pagination/PaginationSection";
import SelectSizePage from "../components/SelectSizePage/SelectSizePage";


function App() {
    
    // const [ pokemonIds, setPokemonIds ] = useState(() => localStorage.getItem('pokemonIds') ? JSON.parse(localStorage.getItem('pokemonIds')) : []);
    const pokemonIds = useSelector(state => state.pokemonIds);
    const pageNumber = useSelector(state => state.pagination.pageNumber);
    const pageSize = useSelector(state => state.pagination.pageSize);
    const count = useSelector(state => state.pagination.count);
    const dispatch = useDispatch();  
    
    useEffect(() => {
        fetchPokemons(pageNumber, pageSize).then((data) => {
            dispatch({type: 'ALL_POKEMONS', pokemons: data.allPokemons, count: data.count })
        }) 
        
    },[pageNumber, pageSize]) 


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
