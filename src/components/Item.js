import React, { useState } from 'react';


const Item = ({ items, completeItem, removeItem, updateItem }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateItem(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    }
}