import { ContactsForm } from "components/ContactsForm/ContactsForm";
import { ContactsList } from "components/ContactsList/Contacts";
import { Filter } from "components/FilterContacts/Filter";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";


const Contacts = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])

  return (
    <>
      <ContactsForm/>
      <Filter />
      <ContactsList />
    </>
  )
};

export default Contacts;