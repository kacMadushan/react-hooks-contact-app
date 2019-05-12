import React, { useContext } from 'react';
import Store from '../context';
import Contact from './Contact';

export default function ContactsList() {
    const { state } = useContext(Store);
    const contact = state.contactList.map(contact => 
        <Contact 
            key={contact.id}
            name={contact.name}
            number={contact.number}
        />
    )
    return (
        <div className="col-sm-6">
            <div className="contacts-list">
                <ul className="list-group">
                    {contact}
                </ul>
            </div>
        </div>
    );
}
