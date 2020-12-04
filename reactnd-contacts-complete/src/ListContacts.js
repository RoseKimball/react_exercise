import React, { Component } from "react";
import PropTypes from "prop-types";

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
    return (
      <div className="list-contacts">
        {JSON.stringify(this.state.query)}
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="search contacts"
            value={this.state.query}
            onChange={e => this.handleOnChange(e.target.value)}
          />
        </div>
        <ol className="contact-list">
          {this.props.contacts.map(contact => (
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
                onClick={() => this.props.onDeleteContact(contact)}
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
