import React from 'react';
import Contact from "../Contact/Contact";

const ContactList = ({ items, onDeleteNumber }) => {
    return (
        <ul>
            {items.map(item => (
            <li key={item.id}>
                <Contact {...item} onDeleteNumber={() => onDeleteNumber(item.id)} />
            </li>
            ))}
        </ul>
    );
};

export default ContactList;