import { useDispatch, useSelector } from "react-redux";
import { totalPagesSelector } from "../../redux/totalPagesSelector";

const PaginationSection = () => {
    const pageNumber = useSelector(state => state.pagination.pageNumber);
    // const pageSize = useSelector(state => state.pagination.pageSize);
    const totalPages = useSelector((state) => totalPagesSelector(state));
    const dispatch = useDispatch();
    // console.log(pageNumber,pageSize,totalPages,'page');


    return <div className="wrapper-buttons">
        <button 
            onClick={() => dispatch({type:'BACK_PAGE'})} 
            disabled={pageNumber === 0}
        >   
            Back
        </button>
        <button 
            onClick={() => dispatch({type:'FORWARD_PAGE'})} 
            disabled={pageNumber === totalPages}
        > 
            Forward
        </button> 
    </div>
}
 
export default PaginationSection;