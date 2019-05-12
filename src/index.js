import React, { useReducer, useContext } from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';

import Store from './context';
import reducer from './reducer';

import Container from './components/Container';
import Header from './components/Header';
import ContactsList from './components/ContactsList';
import AddNewContact from './components/AddNewContact';

function Contacts() {
    const globalStore = useContext(Store);
    const [state, dispatch] = useReducer(reducer, globalStore);

    return (
        <Store.Provider value={{ state, dispatch }}>
            <Container>
                <Header />
                <div className="row">
                    <ContactsList />
                    <AddNewContact />
                </div>
            </Container>
        </Store.Provider>
    )
};


ReactDOM.render(<Contacts />, document.getElementById('root'));
