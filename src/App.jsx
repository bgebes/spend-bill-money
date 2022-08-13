import React from 'react';
import 'bootstrap';
import './App.css';

import Header from './components/Header/Header';
import Balance from './components/Balance/Balance';
import ProductList from './components/ProductList/ProductList';
import Receipt from './components/Receipt/Receipt';

function App() {
  return (
    <div className="app">
      <Header />
      <Balance />
      <ProductList />
      <Receipt />
    </div>
  );
}

export default App;
