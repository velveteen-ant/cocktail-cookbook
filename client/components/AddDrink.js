import React from 'react'
import { useState } from 'react'

const AddDrink = ({ onAdd }) => {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [rating, setRating] = useState('')
    const [comment, setComment] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        onAdd({ name, date, rating, comment })

        setName('')
        setDate('')
        setRating('')
        setComment('')
    }

    return (
        <form className='add-drink' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Drink: </label>
          <input type='text' placeholder='Add drink name' value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
  
        <div className='form-control'>
          <label>Date: </label>
          <input type='date' placeholder='Add date' value={date} onChange={(e) => setDate(e.target.value)} />
        </div>

        <div className='form-control'>
          <label>Rating: </label>
          <input type='number' placeholder='Rating 0-10' value={rating} onChange={(e) => setRating(e.target.value)} />
        </div>

        <div className='form-control'>
          <label>Comments: </label>
          <input type='text' placeholder='Add comments' value={comment} onChange={(e) => setComment(e.target.value)} />
        </div>

        <input type='submit' value='Save Drink' className='btn btn-block' />
      </form>

    )
}

export default AddDrink
