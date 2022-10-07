import React, { useState, useEffect, useRef } from 'react';

function ItemForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
      });
    
      const handleChange = e => {
        setInput(e.target.value);
      };
    
      const handleSubmit = e => {
        e.preventDefault();
    
        props.onSubmit({
          id: Math.floor(Math.random() * 10000),
          text: input
        });
        setInput('');
      };
    
      return (
        <form onSubmit={handleSubmit} className='item-form'>
          {props.edit ? (
            <>
              <input
                placeholder='Update your item'
                value={input}
                onChange={handleChange}
                name='text'
                ref={inputRef}
                className='item-input edit'
              />
               <button onClick={handleSubmit} className='item-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add  Item'
            value={input}
            onChange={handleChange}
            name='text'
            className='item-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='item-button'>
            Add Item
          </button>
        </>
      )}
    </form>
  );  
}

export default ItemForm;