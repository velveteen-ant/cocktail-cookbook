import React from 'react';
import { useState } from 'react';

const UpdateDrink = ({ onUpdate }) => {
  const [updateRating, setUpdateRating] = useState('');
  const [updateComment, setUpdateComment] = useState('');
  const [name, setName] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    onUpdate({ updateRating, updateComment });

    setUpdateRating('');
    setUpdateComment('');
  };

  return (
    <form className='update-drink' onSubmit={onSubmit}>
    <h3>Change your mind?</h3>
      <div className='form-control'>
        <label>Name: </label>
        <input
          type='text'
          placeholder='Enter drink to update'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className='form-control'>
        <label>New Rating: </label>
        <input
          type='number'
          placeholder='Rating 0-10'
          min={0}
          max={10}
          value={updateRating}
          onChange={(e) => setUpdateRating(e.target.value)}
        />
      </div>

      <div className='form-control'>
        <label>New Comments: </label>
        <input
          type='text'
          placeholder='Add comments'
          value={updateComment}
          onChange={(e) => setUpdateComment(e.target.value)}
        />
      </div>

      <input type='submit' value='Update Drink' className='btn btn-block' />
    </form>
  );
};

export default UpdateDrink;
