import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { FaRegEdit } from 'react-icons/fa'

const Drink = ({ drink, onDelete, showUpdate, setShowUpdate }) => {
  //added show update

  //convert the drink date to human readable format
  const dateToConvert = drink.date
  const newDate = new Date(dateToConvert);
  const convertedDate = newDate.toDateString();

 
  return (
    <div className='drink'>
      <h3>
        Name: {drink.name}{' '}
        {/* <FaRegEdit style={{ color: '#6abd4a', cursor: 'pointer' }} className='edit-icon' /> */}
        <FaRegEdit style={{ cursor: 'pointer' }} color={showUpdate ? 'grey' : '#6abd4a'} onClick={()=> setShowUpdate(!showUpdate)} className='edit-icon' />


        {/* <Button color={showAdd ? 'grey' : '#944294'} text={showAdd ? 'Close' : 'Add Drink'} onClick={onAdd} /> */}


        <FaTimes
          style={{ color: '#ee928a', cursor: 'pointer' }}
          onClick={() => onDelete(drink.cocktail_id)}
          className='delete-icon'
        />
      </h3>
      <p>Date: {convertedDate}</p>
      <p>Rating: {drink.rating}</p>
      <p>Comments: {drink.comment}</p>
    </div>
  );
};

export default Drink;
