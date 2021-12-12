import React from 'react';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <h1>Howdy</h1>
      <Button text='hiya' />
      <Footer />
    </div>
  );
};

export default App;
