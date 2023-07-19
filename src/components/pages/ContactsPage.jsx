import { ContactList } from '../contlist/list';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
} from '../redux/selectors';
import { fetchContacts } from '../redux/contactsSlice';
import { ContactForm } from '../contform/form';
import { Filter } from '../filter/filter';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
//   const loading = useSelector(selectLoading);
//   const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts:</h2>
      <Filter />
      {contacts.length !== 0 && <ContactList />}
    </div>
  );
};

export default ContactsPage;