import React from 'react';
import uuid from 'uuid';

const Store = React.createContext({
    contactList : [
        { id: uuid(), name: 'Harry Potter', number: '+1(408) 785-9933' },
        { id: uuid(), name: 'Emma Stone', number: '+1(408) 785-9964' }
    ]
});

export default Store;