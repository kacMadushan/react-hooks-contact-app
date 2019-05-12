import React, { useState, useContext } from 'react';
import uuid from 'uuid';
import Store from '../context';

export default function AddNewContact() {
    const { dispatch } = useContext(Store);

    const [ name, setName ] = useState('');
    const [ number, setNumber ] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        dispatch({ type: "ADD", id: uuid(), name: name, number: number})
        setName('');
        setNumber('');
    }
    return (
        <div className="col-sm-6">
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Contact Name</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        placeholder="Contact Name" 
                        value={name}
                        onChange={() => setName(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Contact Number</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        placeholder="Contact Number" 
                        value={number}
                        onChange={() => setNumber(event.target.value)}
                    />
                </div>
                <button className="btn-submit">Add Contact</button>
            </form>
        </div>
    );
};