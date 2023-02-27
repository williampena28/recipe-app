import axios from 'axios'

export const getMeals = async () =>
{
    let mealData = await axios({
        method: 'GET',
        url: '/get-meal-data'
    });

    return mealData
}

export const getMealById = async (id) =>
{
    let mealData = await axios({
        method: 'GET',
        url: `/get-meal/${id}`
    });

    return mealData
}