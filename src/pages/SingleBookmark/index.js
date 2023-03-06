import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getBookmarkById } from '../../utilities/userFunctions';
import './index.css'
import DeleteBookmark from '../../components/delete_bookmark';
import UpdateForm from '../../components/update_form';

const SingleBookmarkPage = () => {
  // grab the mongodb _id param from the url
  let bookmarkId = useParams();

  const [bookmark, setBookmark] = useState([])
  console.log(bookmark);
  const getBookmark = async () =>
  {
    // get specific bookmark from mongodb by id and set it to our bookmark state
    let response = await getBookmarkById(bookmarkId._id)
    let jsonData = []
    jsonData.push(response.data)
    setBookmark(jsonData)
  }

  useEffect(() =>
  {
    getBookmark();
  }, []);

  const bookmarkJSX = bookmark.map((obj, index) =>
  {
    return(
      <div className='bookmark' key={index}>
        <h1>
          {obj.name}
        </h1>
        <img src={obj.imgUrl} alt="Meal"/>
        <section>
          <h2>
            How to make:
          </h2>
          <p>
            {obj.instructions}
          </p>
        </section>
      </div>
    )
  })

  return (
    <div className='bookmark-wrap'>
      <DeleteBookmark/>
        {bookmarkJSX}
      <UpdateForm/>
    </div>
  )
}

export default SingleBookmarkPage