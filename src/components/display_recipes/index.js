import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getMeals } from '../../utilities/userFunctions.js'

const DisplayRecipes = (props) => {

  // declare navigate for redirection of the url
  const navigate = useNavigate();

  const [searchString, setSearchString] = useState('')
  const [recipes, setRecipes] = useState([])

  // form handlers
  const handleInputChange = (event) =>
  {
    let newValue = event.target.value;
    setSearchString(newValue);
  }

  const handleSubmit = async (event) =>
  {
    event.preventDefault();
    let returnedData = await getMeals(searchString)
    setRecipes(returnedData.data.meals);
  }

  // error handling; return header if no recipe is found via search bar
  let performSearch = (mealData) =>
  {
    if(mealData === null)
    {
      return(
        <div>
          <h2>No recipes found.</h2>
        </div>
      )
    }
    else
    {
      return mealData.map((meal, index) =>
      {
        return(
          <div className='card' key={index} onClick={() => navigate(`/recipe/${meal.idMeal}`)}>
            <p>{meal.strMeal}</p>
          </div>
        )
      })
    }
  }

  let mealJSX = performSearch(recipes);

  return (
    <div className='meal-wrap'>
      <form className='form-wrap' onSubmit={handleSubmit}>
        <label htmlFor="name">Search Recipe:</label>
        <input className='form-input-wrap'
          type="text"
          id="instructions"
          name="instructions"
          value={searchString}
          onChange={handleInputChange}
          required
        />
        <button className='form-submit-button' type="submit">Search</button>
      </form>
      {mealJSX}
    </div>
  )
}

export default DisplayRecipes