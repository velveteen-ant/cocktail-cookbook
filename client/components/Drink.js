import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Drink = ({ drink, onDelete }) => {

  //convert the drink date to human readable format
  const dateToConvert = drink.date
  const newDate = new Date(dateToConvert);
  const convertedDate = newDate.toDateString();

 
  return (
    <div className='drink'>
      <h3>
        Name: {drink.name}{' '}
        <FaTimes
          style={{ color: '#ee928a', cursor: 'pointer' }}
          onClick={() => onDelete(drink.cocktail_id)}
        />
      </h3>
      <p>Date: {convertedDate}</p>
      <p>Rating: {drink.rating}</p>
      <p>Comments: {drink.comment}</p>
    </div>
  );
};

export default Drink;
