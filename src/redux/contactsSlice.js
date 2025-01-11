import { createSlice } from '@reduxjs/toolkit';
import initialContacts from '../contacts.json';

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem('persist:contacts');
  if (savedContacts) {
    const parsedContacts = JSON.parse(savedContacts);
    return JSON.parse(parsedContacts.items);
  }
  return initialContacts;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: getInitialContacts(),
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = state => state.contacts.items;
export const contactsReducer = contactsSlice.reducer;
