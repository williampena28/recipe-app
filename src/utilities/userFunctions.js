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

// ADD a meal to our bookmark database
export const addToBookMarks = async (meal) =>
{

    // Adding a seperate array of ingredient and tag objects to serperate variables
    const ingrediantsList = 
    [
        {ingrediant: meal[0].strIngredient1, measure: meal[0].strMeasure1},
        {ingrediant: meal[0].strIngredient2, measure: meal[0].strMeasure2},
        {ingrediant: meal[0].strIngredient3, measure: meal[0].strMeasure3},
        {ingrediant: meal[0].strIngredient4, measure: meal[0].strMeasure4},
        {ingrediant: meal[0].strIngredient5, measure: meal[0].strMeasure5},
        {ingrediant: meal[0].strIngredient6, measure: meal[0].strMeasure6},
        {ingrediant: meal[0].strIngredient7, measure: meal[0].strMeasure7},
        {ingrediant: meal[0].strIngredient8, measure: meal[0].strMeasure8},
        {ingrediant: meal[0].strIngredient9, measure: meal[0].strMeasure9},
        {ingrediant: meal[0].strIngredient10, measure: meal[0].strMeasure10},
        {ingrediant: meal[0].strIngredient11, measure: meal[0].strMeasure11},
        {ingrediant: meal[0].strIngredient12, measure: meal[0].strMeasure12},
        {ingrediant: meal[0].strIngredient13, measure: meal[0].strMeasure13},
        {ingrediant: meal[0].strIngredient14, measure: meal[0].strMeasure14},
        {ingrediant: meal[0].strIngredient15, measure: meal[0].strMeasure15},
        {ingrediant: meal[0].strIngredient16, measure: meal[0].strMeasure16},
        {ingrediant: meal[0].strIngredient17, measure: meal[0].strMeasure17},
        {ingrediant: meal[0].strIngredient18, measure: meal[0].strMeasure18},
        {ingrediant: meal[0].strIngredient19, measure: meal[0].strMeasure19},
        {ingrediant: meal[0].strIngredient20, measure: meal[0].strMeasure20},
    ]

    const data =
    {
        name: `${meal[0].strMeal}`,
        category: `${meal[0].strCategory}`,
        area: `${meal[0].strArea}`,
        imgUrl: `${meal[0].strMealThumb}`,
        instructions: `${meal[0].strInstructions}`,
        ingrediants: ingrediantsList
    }

    // return the meal data to our database and save it
    let response = await axios({
        method: 'POST',
        url: '/add-to-bookmarks',
        data: data
    })

    console.log(response);
    console.log('Meal has been added to bookmarks!')
}

// GET the bookmarks data from the database
export const getBookMarkData = async () =>
{
    let bookmarkData = await axios({
        method: 'GET',
        url: '/get-bookmarks-data'
    });

    return bookmarkData
}

// GET bookmark data by their _id
export const getBookmarkById = async (id) =>
{
    let bookmark = await axios({
        method: 'GET',
        url: `/get-bookmark/${id}`
    })

    return bookmark;
}

// DELETE bookmark data from the database by their _id
export const deleteBookmark = async (id) =>
{
    let response = await axios({
        method: 'DELETE',
        url: `/delete-from-bookmarks/${id}`
    })
    console.log('DELETE request suc')
}