import { useDispatch, useSelector } from "react-redux"
import { deleteContact } from "redux/contacts/operations";
import { selectItems } from "redux/contacts/selectors";
import { selectFilter } from "redux/filter/selector";


export const ContactsListItem = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(selectItems);
  const filter = useSelector(selectFilter);

  const filteredContacts = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  };

  const visibleContacts = filteredContacts();

  return  (
    <>
      {visibleContacts.map(contact => (
        <li id={contact.id} key={contact.id}>
          <p>
            <b>{contact.name}</b> : {contact.number}
          </p>
          <button type="button" onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
        </li>
      ))}
    </>
  );
};




export const ContactsList = () => {

  // const contacts = useSelector(selectItems);
  return (
    <ul>
      <ContactsListItem />
    </ul>
  )
};