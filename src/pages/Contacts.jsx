import { ContactsForm } from "components/ContactsForm/ContactsForm";
import { ContactsList } from "components/ContactsList/ContactsList";
import { Filter } from "components/FilterContacts/Filter";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const Contacts = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <div style={styles.container}>
      <ContactsForm/>
      <Filter />
      <ContactsList />
    </div>
  )
};

export default Contacts;