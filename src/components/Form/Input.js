import React , { useEffect, useRef }from 'react';

import { Form as F } from 'react-bulma-components';

import { useField } from '@unform/core';


export default function Input({ name, ...rest }) {

    const inputRef = useRef(null);

    const { fieldName, registerField, defaultValue, error } = useField(name);

    useEffect(()=> {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    },[inputRef]);

    return (
        <div>

            <input ref={inputRef} defaultValue={defaultValue} {...rest} />

            {error && <span style={{color: '#f00'}}>{error}</span>}
        </div>
        
    );
}
