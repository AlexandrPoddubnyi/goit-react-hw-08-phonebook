import { useDispatch, useSelector } from "react-redux"
import { addContact } from "redux/contacts/operations";
import { selectItems } from "redux/contacts/selectors";


export const ContactsForm = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(selectItems);
  
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value;
    const number = form.number.value;
    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      return alert(`${name} is already in your list`)
    }
    dispatch(addContact({ name, number }));
    form.reset();

  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          Name
          <input
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
/>
        </label>
        <label >
          Number
          <input
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            required
/>
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  )
};