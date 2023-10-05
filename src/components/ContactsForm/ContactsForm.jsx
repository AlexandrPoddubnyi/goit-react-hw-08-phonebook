import { useDispatch, useSelector } from "react-redux"
import { addContact } from "redux/contacts/operations";
import { selectItems } from "redux/contacts/selectors";
import css from './ContactsForm.module.css'

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
      <form className={css.form} onSubmit={handleSubmit}>
        <input className={css.input}
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input className={css.input}
          type="tel"
          name="number"
          placeholder="Number"
          required
        />
        <button className={css.button} type="submit">Add contact</button>
      </form>
    </>
  )
};