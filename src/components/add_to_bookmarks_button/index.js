import React from 'react'
import './index.css'
import { addToBookMarks } from '../../utilities/userFunctions'

const AddToBookMarks = (props) => {

  return (
    <div className='add-bookmark-button' onClick={() => addToBookMarks(props.currentMeal)}>
        <h4>Add to bookmarks</h4>
    </div>
  )
}

export default AddToBookMarks