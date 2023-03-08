import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'
import { addToBookMarks } from '../../utilities/userFunctions'

const AddToBookMarks = (props) => {

  let navigate = useNavigate();

  const handleClick = () =>
  {
    addToBookMarks(props.currentMeal);
    navigate(`/bookmarks`);
  }

  return (
    <div className='add-bookmark-button' onClick={handleClick}>
        <h4>Add to bookmarks</h4>
    </div>
  )
}

export default AddToBookMarks