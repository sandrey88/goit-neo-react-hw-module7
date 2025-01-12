import { useDispatch } from 'react-redux';
import { FaUser, FaPhone } from 'react-icons/fa';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const { id, name, number } = contact;

  return (
    <div className={css.contact}>
      <div className={css.info}>
        <p className={css.name}>
          <FaUser className={css.icon} /> {name}
        </p>
        <p className={css.number}>
          <FaPhone className={css.icon} /> {number}
        </p>
      </div>
      <button onClick={() => dispatch(deleteContact(id))} className={css.button}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
