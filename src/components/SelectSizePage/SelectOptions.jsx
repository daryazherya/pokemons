const PAGE_SIZES = [10,15,20,25,30];

const SelectOptions = () => {
    return PAGE_SIZES.map((number, id) => {
        return <option key={id}>{number}</option>
        })
}
 
export default SelectOptions;