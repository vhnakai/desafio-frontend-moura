import React, { useRef, useCallback } from 'react';

import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

const ModalAddContact= ({
  isOpen,
  setIsOpen,
  handleAddContact,
}) => {
  const formRef = useRef(null);

  const handleSubmit = useCallback(
    async (data) => {
      handleAddContact(data);
      setIsOpen();
    },
    [handleAddContact, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Contato</h1>

        <Input name="name" placeholder="Nome" />
        <Input name="phonenumber" placeholder="Numero telefonico" />

        <Input name="address" placeholder="Endereço"  />

        <button type="submit" >
          <p className="text">Adicionar Contato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddContact;