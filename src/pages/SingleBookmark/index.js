import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getBookmarkById } from '../../utilities/userFunctions';
import './index.css'

const SingleBookmarkPage = () => {
  // grab the mongodb _id param from the url
  let bookmarkId = useParams();

  const [bookmark, setBookmark] = useState([])

  const getBookmark = async () =>
  {
    let response = await getBookmarkById(bookmarkId._id)
    setBookmark(response.data)
    console.log(response)
  }

  useEffect(() =>
  {
    getBookmark();
  }, []);

//   const bookmarkJSX = bookmark.map((bookmark, index) =>
//   {
//     return(
//         <h1>bookmark.name</h1>
//     )
//   })

  return (
    <div className='bookmark-wrap'>
        {/* {bookmarkJSX} */}
    </div>
  )
}

export default SingleBookmarkPage