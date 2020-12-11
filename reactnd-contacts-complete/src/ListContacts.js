import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class ListContacts extends Component {
  state = {
    query: ""
  };

  static PropTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  };

  handleOnChange = query => {
    this.setState(() => ({
      query: query
    }));
  };

  render() {
    const { query } = this.state;
    const { contacts, onDeleteContact } = this.props;

    const showingContacts =
      query === ""
        ? contacts
        : contacts.filter(c =>
            c.name.toLowerCase().includes(query.toLowerCase())
          );

    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="search contacts"
            value={query}
            onChange={e => this.handleOnChange(e.target.value)}
          />
          <Link to="/create" className="add-contact"></Link>
        </div>
        <ol className="contact-list">
          {showingContacts.map(contact => (
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
                onClick={() => onDeleteContact(contact)}
                className="contact-remove"
              >
                remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default ListContacts;
