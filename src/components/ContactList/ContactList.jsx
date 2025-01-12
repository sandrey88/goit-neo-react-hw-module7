import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import css from './ContactList.module.css';

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.list}>
      {visibleContacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
        />
      ))}
    </div>
  );
};

export default ContactList;
