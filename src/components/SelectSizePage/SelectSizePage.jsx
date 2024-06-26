import { useDispatch, useSelector } from "react-redux";
import SelectOptions from "./SelectOptions";
import './select.scss'


const SelectSizePage = () => {
    const pageSize = useSelector(state => state.pagination.pageSize);
    const dispatch = useDispatch();  

    return <select 
        className='select'
        onChange={(e) => {
            dispatch({type: 'CHANGE_PAGESIZE', pageSize: Number(e.target.value)})
        }} 
        value={pageSize}
    >
        <SelectOptions/>
    </select>
}
 
export default SelectSizePage;