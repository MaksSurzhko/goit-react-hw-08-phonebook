import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';
import { selectFilterContact } from '../redux/selectors';
import lcss from "../contlist/list.module.css";

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectFilterContact);
 

  return (
    
    <ul className={lcss.llist}>
        {contacts.map(contact => (
          <li className={lcss.item} key={contact.id}>
            {contact.name}: {contact.number}
            {(
                <button
                  className={lcss.bbtn}
                  type="button"
                  onClick={() => dispatch(deleteContact(contact.id))}
                >
                  Delete
                </button>
              
            )}
          </li>
        ))}
      </ul>
      
  );
};