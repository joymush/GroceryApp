import React from 'react';
import './App.css';
import ItemList from './components/ItemList';
import {
  BrowserRouter as Router
}

function App() {
  return (
    <div className='grocery-app'>
      <ItemList />
    </div>
  );
}

export default App;
