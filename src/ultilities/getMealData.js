import React from 'react'
import axios from 'axios'

export const getMeals = async () =>
{
    let mealData = await axios({
        method: 'GET',
        url: '/get-meal-data'
    });

    return mealData
}