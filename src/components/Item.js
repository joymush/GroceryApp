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
    };

    if (edit.id) {
        return <ItemForm edit={edit} onSubmit={submitUpdate} />;
    }

    return items.map((item, index) => (
        <div
          className={item.isComplete ? 'item-row complete' : 'item-row'}
          key={index}
        >
          <div key={item.id} onClick={() => completeItem(item.id)}>
            {item.text}
          </div>
        </div>
    ))
}