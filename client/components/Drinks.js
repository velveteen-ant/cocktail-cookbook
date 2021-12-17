import React from 'react';
import Drink from './Drink';
import Button from './Button';
import { FaGlassWhiskey } from 'react-icons/fa';
import AddDrink from './AddDrink';

const Drinks = ({ drinks, onDelete, onAdd, showAdd, addDrink, showAddDrink, showUpdate, setShowUpdate }) => {
  //added show update

  return (
    <>
      {/* <h1 className='mainHeader'>HOWDY!</h1>
      <p className='intro'>
        Welcome to Cocktail Cookbook -- <br /> a place for you to store your
        personal thoughts and opinions of beverages you've enjoyed (or not quite
        enjoyed) and find new ones to try. Let's get sippin'!
      </p> */}
      <div className='container'>

      <Button color={showAdd ? 'grey' : '#944294'} text={showAdd ? 'Close' : 'Add Drink'} onClick={onAdd} />

      {showAddDrink && (
        <AddDrink onAdd={addDrink} />
      )}

      {drinks.map((drink, index) => (
        <Drink
          key={index}
          drink={drink}
          onDelete={onDelete}
          //adding show update
          showUpdate={showUpdate}
          setShowUpdate={setShowUpdate}
        />
      ))}

      {drinks.length === 0 && <div className='no-drink'> <FaGlassWhiskey className='no-drink-icon'/> No Drinks to Show! </div>}
      </div>
    </>
  );
};

export default Drinks;

//component that will make fetch request for drink cards
