import React, { useRef, useCallback } from 'react';

import { FiCheckSquare } from 'react-icons/fi';
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';


const ModalEditContact = ({
  isOpen,
  setIsOpen,
  editingContact,
  handleUpdateContact,
}) => {
  const formRef = useRef(null);

  const handleSubmit = useCallback(
    async (data) => {
      handleUpdateContact(data);

      setIsOpen();
    },
    [handleUpdateContact, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingContact}>
        <h1>Editar Contato</h1>

        <Input name="name"  />
        <Input name="phonenumber"  />

        <Input name="address"  />

        <button type="submit" >
          <div className="text">Editar Contato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditContact;