import React, { Component } from 'react'
import './App.css';
import shortid from 'shortid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';


const filterContactsByQuery = (filter, contacts) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const persistedComments = localStorage.getItem('contacts');

    if (persistedComments) {
      this.setState({ contacts: JSON.parse(persistedComments) });
    }
  }

  componentDidUpdate(prevState, prevProps) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = contact => {
    const { name } = contact;
    const contactsArray = this.state.contacts;
    const    = contactsArray.find(con => con['name'] === name);
    if (nameExist) {
      alert(`${name} is already exist`);
      return;
    }

    const contactToAdd = {
      ...contact,
      id: shortid.generate(),
    };

    this.setState(state => ({
      contacts: [...state.contacts, contactToAdd],
    }));
  };

  deleteNumber = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };


  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = filterContactsByQuery(filter, contacts);

    return (
      <div className="wrap">
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        {contacts.length >= 2 && (
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        )}
        {contacts.length > 0 && (
          <ContactList
            items={filteredContacts}
            onDeleteNumber={this.deleteNumber}
          />
        )}
      </div>
    )
  }
}
