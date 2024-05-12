import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <h1>Johanna</h1>
      <ItemListContainer greeting="¡Bienvenidos a la tienda de Dime que Sí Novia!" />
    </div>
  );
}

export default App;
