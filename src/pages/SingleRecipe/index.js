import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getMealById } from '../../ultilities/getMealData';


const RecipePage = () => {

  // grab the mealId param from the url
  let mealId = useParams();

  const [meal, setMeal] = useState([])

  // call the api from getMealById to find the specific meal with that id
  const apiCall = async () =>
  {
    let response = await getMealById(mealId.id);
    let mealList = response.data.meals;
    setMeal(mealList)
    // console.log(mealList);
  }

  useEffect(() =>
  {
    apiCall()
  }, []);

  const mealJSX = meal.map((meal, index) =>
  {
    return(
      <div key={index}>
        <h1>{meal.strMeal}</h1>
        <img src={meal.strMealThumb} alt="Meal Picture"/>
        <section>
          <h2>How to make:</h2>
          <p>{meal.strInstructions}</p>
        </section>
      </div>
    )
  })

  return (
    <div>{mealJSX}</div>
  )
}

export default RecipePage