import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getMeals } from '../../ultilities/getMealData'

const DisplayRecipes = () => {

  // declare navigate for redirection of the url
  const navigate = useNavigate();

  const [recipes, setRecipes] = useState([])

  const apiCall = async () =>
  {
    let response = await getMeals();
    let mealList = response.data.meals;
    setRecipes(mealList)
    // console.log(mealList);
  }

  useEffect(() =>
  {
    apiCall()
  }, []);

  let mealJSX = recipes.map((meal, index) =>
  {
    return(
      <div className='card' key={index} onClick={() => navigate(`/recipe/${meal.idMeal}`)}>
        <p>{meal.strMeal}</p>
      </div>
    )
  })

  return (
    <div>{mealJSX}</div>
  )
}

export default DisplayRecipes