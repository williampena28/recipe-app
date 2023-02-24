import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getMeals } from './../../ultilities/getMealData'

const DisplayRecipes = () => {

  const [recipe, setRecipe] = useState([])

  const apiCall = async () =>
  {
    let response = await getMeals();
    let mealList = response.data.meals;
    setRecipe(mealList)
    // console.log(mealList);
  }

  useEffect(() =>
  {
    apiCall()
  }, []);

  let mealJSX = recipe.map((meal, index) =>
  {
    return(
      <div className='card' key={index}>
        <p>{meal.strMeal}</p>
      </div>
    )
  })

  return (
    <div>{mealJSX}</div>
  )
}

export default DisplayRecipes