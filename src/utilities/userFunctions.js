import axios from "axios";

// api call to get the meal data from themealdb
export const getMeals = async () =>
{
    let mealData = await axios({
        method: 'GET',
        url: '/get-meal-data'
    });

    return mealData
}

// api call to get a specific meal by it's mealId
export const getMealById = async (id) =>
{
    let mealData = await axios({
        method: 'GET',
        url: `/get-meal/${id}`
    });

    return mealData
}

// function to add a meal to our bookmark database
export const addToBookMarks = async (meal) =>
{

    // Adding a seperate array of ingredient and tag objects to serperate variables
    const ingrediantsList = 
    [
        {ingrediant: meal.strIngrediant1, measure: meal.strMeasure1},
        {ingrediant: meal.strIngrediant2, measure: meal.strMeasure2},
        {ingrediant: meal.strIngrediant3, measure: meal.strMeasure3},
        {ingrediant: meal.strIngrediant4, measure: meal.strMeasure4},
        {ingrediant: meal.strIngrediant5, measure: meal.strMeasure5},
        {ingrediant: meal.strIngrediant6, measure: meal.strMeasure6},
        {ingrediant: meal.strIngrediant7, measure: meal.strMeasure7},
        {ingrediant: meal.strIngrediant8, measure: meal.strMeasure8},
        {ingrediant: meal.strIngrediant9, measure: meal.strMeasure9},
        {ingrediant: meal.strIngrediant10, measure: meal.strMeasure10},
        {ingrediant: meal.strIngrediant11, measure: meal.strMeasure11},
        {ingrediant: meal.strIngrediant12, measure: meal.strMeasure12},
        {ingrediant: meal.strIngrediant13, measure: meal.strMeasure13},
        {ingrediant: meal.strIngrediant14, measure: meal.strMeasure14},
        {ingrediant: meal.strIngrediant15, measure: meal.strMeasure15},
        {ingrediant: meal.strIngrediant16, measure: meal.strMeasure16},
        {ingrediant: meal.strIngrediant17, measure: meal.strMeasure17},
        {ingrediant: meal.strIngrediant18, measure: meal.strMeasure18},
        {ingrediant: meal.strIngrediant19, measure: meal.strMeasure19},
        {ingrediant: meal.strIngrediant20, measure: meal.strMeasure20},
    ]

    const data =
    {
        name: `${meal.strMeal}`,
        category: `${meal.strCategory}`,
        area: `${meal.strArea}`,
        imgUrl: `${meal.strMealThumb}`,
        instructions: `${meal.strInstructions}`,
        ingrediants: ingrediantsList
    }

    console.log(data);

    // return the meal data to our database and save it
    // let response = await axios({
    //     method: "POST",
    //     url: "/add-to-bookmarks",
    //     data: 
    // })
}