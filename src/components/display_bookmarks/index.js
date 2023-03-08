import React, { useState, useEffect } from 'react'
import { getBookMarkData } from '../../utilities/userFunctions'
import { useNavigate } from 'react-router-dom'
import './index.css'


const DisplayBookmarks = () => {

  const navigate = useNavigate();

  const [bookmarks, setBookmarks] = useState([]);
  
  // set the list of bookmarks from the database
  const callMongoose = async () =>
  {
    let response = await getBookMarkData();
    let bookmarksData = response.data
    setBookmarks(bookmarksData)
    console.log(bookmarksData)
  }

  useEffect(() =>
  {
    callMongoose()
  }, []);

  let bookmarkJSX = bookmarks.map((bookmark, index) =>
  {
    return(
      <div className='card' key={index} onClick={() => navigate(`/bookmark/${bookmark._id}`)}>
        <img className='image-box' src={bookmark.imgUrl} width='200' height='200' alt='food'/>
        <p>{bookmark.name}</p>
      </div>
    )
  })

  return (
    <div className='bookmarks-wrap'>
      <h1>Bookmarks:</h1>
      {bookmarkJSX}
    </div>
  )
}

export default DisplayBookmarks