import React from "react";

function ListContacts(props) {
  return (
    <ol className="contact-list">
      {props.contacts.map(contact => (
        <li className="contact-list-item" key={contact.id}>
          <div
            className="contact-avatar"
            style={{ backgroundImage: `url(${contact.avatarURL})` }}
          ></div>
          <div className="contact-details">
            <p>{contact.name}</p>
            <p>{contact.details}</p>
          </div>
          <button
            onClick={() => props.onDeleteContact(contact)}
            className="contact-remove"
          >
            remove
          </button>
        </li>
      ))}
    </ol>
  );
}

export default ListContacts;
