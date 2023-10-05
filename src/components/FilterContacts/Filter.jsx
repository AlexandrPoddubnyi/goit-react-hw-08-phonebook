import { useDispatch } from "react-redux";
import { filterContacts } from "redux/filter/slice";
import css from './Filter.module.css'



export const Filter = () => {

  const dispatch = useDispatch()

  const handleFilter = e => {
    const inputValue = e.target.value;
    dispatch(filterContacts(inputValue))
  }

  return (
      <input className={css.input}
        type="text"
        name="filter"
        onChange={handleFilter}
        required
        placeholder="Find your contact by name"
      />
  )
};