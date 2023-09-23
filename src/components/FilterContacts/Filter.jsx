import { useDispatch } from "react-redux";
import { filterContacts } from "redux/filter/slice";



export const Filter = () => {

  const dispatch = useDispatch()

  const handleFilter = e => {
    const inputValue = e.target.value;
    dispatch(filterContacts(inputValue))
  }

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={handleFilter}
        required
      />
    </label>
  )
};