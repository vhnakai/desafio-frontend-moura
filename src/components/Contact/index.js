import React from 'react';

import { FiEdit3, FiTrash } from 'react-icons/fi';

import { Container } from './styles';

const Contact = ({
  contact,
  handleDelete,
  handleEditContact,
}) => {


  function setEditingContact() {
    handleEditContact(contact);
  }

  return (
    <Container >
      <section className="body">
        <h2>{contact.name}</h2>
        <p>{contact.address}</p>
      </section>
      <section className="footer">
        <div className="icon-container">
          <button
            type="button"
            className="icon"
            onClick={() => setEditingContact()} 
          >
            <FiEdit3 size={20} />
          </button>

          <button
            type="button"
            className="icon"
            onClick={() => handleDelete(contact.id)}
          >
            <FiTrash size={20} />
          </button>
        </div>

      </section>
    </Container>
  );
};

export default Contact;