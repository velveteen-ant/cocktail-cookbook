import React from 'react';
import Drink from './Drink';
import Button from './Button';

const Drinks = ({ drinks, onDelete, onAdd, showAdd }) => {
  return (
    <>
      <h1 className='mainHeader'>HOWDY!</h1>
      <p className='intro'>
        Welcome to Cocktail Cookbook -- <br /> a place for you to store your
        personal thoughts and opinions of beverages you've enjoyed (or not quite
        enjoyed) and find new ones to try. Let's get sippin'!
      </p>
      <div className='container'>
      <Button color={showAdd ? 'grey' : '#944294'} text={showAdd ? 'Close' : 'Add Drink'} onClick={onAdd} />

      {drinks.map((drink, index) => (
        <Drink
          key={index}
          drink={drink}
          onDelete={onDelete}
        />
      ))}
      </div>
    </>
  );
};

export default Drinks;

//component that will make fetch request for drink cards
