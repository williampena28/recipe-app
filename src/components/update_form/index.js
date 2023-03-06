import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { updateBookmark } from '../../utilities/userFunctions';
import './index.css'

const UpdateForm = () => {

  let mealId = useParams();

  const [formData, setFormData] = useState({})

  const handleInputChange = (event) =>
  {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value})
  }

  const handleSubmit = (event) =>
  {
    event.preventDefault();
    const newInstructions = formData
    console.log(newInstructions)
    console.log(mealId);
    updateBookmark(mealId._id, newInstructions);
  }

  return (
    <form className='form-wrap' onSubmit={handleSubmit}>
      <label htmlFor="name">Update instructions:</label>
      <input className='form-input-wrap'
        type="text"
        id="instructions"
        name="instructions"
        onChange={handleInputChange}
        required
      />
      <button className='form-submit-button' type="submit">Submit</button>
    </form>
  )
}

export default UpdateForm