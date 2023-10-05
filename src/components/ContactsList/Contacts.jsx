import { useDispatch, useSelector } from "react-redux"
import { deleteContact } from "redux/contacts/operations";
import { selectItems } from "redux/contacts/selectors";
import { selectFilter } from "redux/filter/selector";
import css from './ContctsList.module.css'


export const ContactsListItem = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(selectItems);
  const filter = useSelector(selectFilter);

  const filteredContacts = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  };

  const visibleContacts = filteredContacts();

  return  (
    <ul className={css.ul}>
      {visibleContacts.map(contact => (
        <li
          className={css.li}
          id={contact.id}
          key={contact.id}>
          <p className={css.p}>
            <b>{contact.name}</b> : {contact.number}
          </p>
          <button
            className={css.button}
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete</button>
        </li>
      ))}
    </ul>
  );
};




export const ContactsList = () => {

  // const contacts = useSelector(selectItems);
  return (
    <>
      <ContactsListItem />
    </>
  )
};