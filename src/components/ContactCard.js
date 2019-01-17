import React from 'react';

function ContactCard(props) {
    return (
        <div>
            <div>
                <h3>{props.contact.name}</h3>
                <p>Email: {props.contact.email}</p>
            </div>
        </div>

    )
}


export default ContactCard;