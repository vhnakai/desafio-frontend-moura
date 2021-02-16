import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';

import api from '../../services/api';

import Contact from '../../components/Contact';
import ModalAddContact from '../../components/ModalAddContact';
import ModalEditContact from '../../components/ModalEditContact';

import { ContactsContainer } from './styles';


const Dashboard = () => {

    const [contacts, setContacts] = useState([]);
    const [editingContact, setEditingContact] = useState({});
    const [modalOpen, setModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);

    useEffect(() => {
        async function loadContacts() {
            const response = await api.get('/phonebook');
            setContacts(response.data);
        }

        loadContacts();
    }, []);

    async function handleAddContact(contact) {
        try {
            const response = await api.post('/phonebook', {
                ...contact
            });

            setContacts([...contact, response.data]);
        } catch (err) {
            console.log(err);
        }
    }

    async function handleUpdateContact(
        contact
    ) {
        try {
            const response = await api.put(`/phonebook/${editingContact.id}`, {
                ...editingContact,
                ...contact,
            });

            setContacts(
                contacts.map(mappedContact =>
                    mappedContact.id === editingContact.id ? { ...response.data } : mappedContact,
                ),
            );
        } catch (err) {
            console.log(err);
        }
    }

    async function handleDeleteContact(id) {
        try {
            await api.delete(`/phonebook/${id}`);
            setContacts(contacts.filter(contact => contact.id !== id));
        } catch (err) {
            console.log(err);
        }
    }

    function toggleModal() {
        setModalOpen(!modalOpen);
    }

    function toggleEditModal() {
        setEditModalOpen(!editModalOpen);
    }

    function handleEditContact(contact) {
        setEditingContact(contact);
        toggleEditModal();
    }

    return (
        <>
            <Header openModal={toggleModal} />
            <ModalAddContact
                isOpen={modalOpen}
                setIsOpen={toggleModal}
                handleAddContact={handleAddContact}
            />
            <ModalEditContact
                isOpen={editModalOpen}
                setIsOpen={toggleEditModal}
                editingContact={editingContact}
                handleUpdateContact={handleUpdateContact}
            />

            <ContactsContainer >
                {contacts &&
                    contacts.map(contact => (
                        <Contact
                            key={contact.id}
                            contact={contact}
                            handleDelete={handleDeleteContact}
                            handleEditContact={handleEditContact}
                        />
                    ))}
            </ContactsContainer>
        </>
    );
};

export default Dashboard;
