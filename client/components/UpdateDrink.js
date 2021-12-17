import React from 'react'
import { useState } from 'react'

const UpdateDrink = ({ onUpdate }) => {
    const [updateRating, setUpdateRating] = useState('')
    const [updateComment, setUpdateComment] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        onUpdate({ updateRating, updateComment })

        setUpdateRating('')
        setUpdateComment('')
    }

    return (
        <form className='add-drink' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Rating: </label>
          <input type='number' placeholder='New rating' min={0} max={10} value={updateRating} onChange={(e) => setUpdateRating(e.target.value)} />
        </div>

        <div className='form-control'>
          <label>Comments: </label>
          <input type='text' placeholder='New comments' value={updateComment} onChange={(e) => setUpdateComment(e.target.value)} />
        </div>

        <input type='submit' value='Update Drink' className='btn btn-block' />
      </form>
    )
}

export default UpdateDrink
