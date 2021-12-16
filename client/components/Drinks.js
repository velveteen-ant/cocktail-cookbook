import React from 'react';
import Drink from './Drink';

const Drinks = ({ drinks, onDelete }) => {
  return (
    <>
      <h1 className='mainHeader'>HOWDY!</h1>
      <p className='intro'>
        Welcome to Cocktail Cookbook -- <br /> a place for you to store your
        personal thoughts and opinions of beverages you've enjoyed (or not quite
        enjoyed) and find new ones to try. Let's get sippin'!
      </p>
      <div className='container'>
      {drinks.map((drink) => (
        <Drink
          key={drink.cocktail_id}
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
