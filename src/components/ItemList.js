import React, { useState } from 'react';
import ItemForm from './ItemForm';
import Item from './Item';

function ItemList() {
    const [items, setItems] = useState([]);

    const addItem = item => {
        if (!item.text  || /^\s*$/.test(todo.text)) {
            return;
        }

        const newItems = [item, ...items];

        setItems(newItems);
        console.log(...todos);
    };
}