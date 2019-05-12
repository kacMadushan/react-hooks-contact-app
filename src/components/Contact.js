import React from 'react';

export default function Contact({ name, number}) {
    return (
        <li className="list-group-item contacts-item">
            <div className="contact-lable">
                <p className="char">{name.charAt(0)}</p>
            </div>
            <div className="contact-info">
                <h4>{name}</h4>
                <p>{number}</p>
            </div>
        </li>
    );
};