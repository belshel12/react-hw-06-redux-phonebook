import { useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { Layout } from '../Layout';
import { Title } from './App.styled';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';

const defaultValue = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', defaultValue);
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    contacts.find(contact => contact.name === newContact.name)
      ? alert(`${newContact.name} is already in contacts`)
      : setContacts(state => [...state, newContact]);
  };

  const addFilter = evt => {
    setFilter(evt.target.value);
  };

  const selectContact = () => {
    const selectedName = contacts.filter(contact =>
      filter
        ? contact.name.toLowerCase().includes(filter.toLowerCase())
        : filter
    );
    return selectedName;
  };

  const deleteContact = evt => {
    const item = contacts.find(contact => contact.id === evt);
    const itemIndex = contacts.indexOf(item);

    contacts.splice(itemIndex, 1);
    setContacts(state => [...state]);
  };

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <Title>Contacts</Title>
      <Filter value={filter} onSearch={addFilter} />
      <ContactList
        contacts={contacts}
        filter={filter}
        select={selectContact}
        onDelete={deleteContact}
      />
    </Layout>
  );
};
