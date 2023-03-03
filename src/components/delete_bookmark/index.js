import React from 'react'
import { deleteBookmark } from '../../utilities/userFunctions'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './index.css'

const DeleteBookmark = () => {

    const navigate = useNavigate();

    let bookmarkId = useParams();

    const handleClick = (id) =>
    {
        deleteBookmark(id);
        navigate('/bookmarks');
    }

  return (
    <div className='delete-bookmark-button' onClick={handleClick}>Delete bookmark</div>
  )
}

export default DeleteBookmark