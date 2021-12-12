import React from 'react';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Footer from './components/Footer';
import Drinks from './components/Drinks';

const App = () => {
  return (
    <div>
      <Header />
      <Drinks />
      {/* <Button text='hiya' /> */}
      <Footer />
    </div>
  );
};

export default App;
