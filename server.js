const express = require('express')
const path = require('path')
// logs the different requests to our server
const logger = require('morgan')
const axios = require('axios');
// cross origin access
const cors = require('cors')

require('dotenv').config();
require('./config/database.js')

const app = express()

// access
app.use(cors({
    origin: "*"
}));

app.use(express.json())

app.use(express.static(path.join(__dirname, 'build')))

app.get("/", (req, res) =>
{
    res.send("Good route!")
})

app.get('/get-meal-data', async (req, res) =>
{
    // call API
    // this route gives us all meals with the first letter 'a'
    let response = await axios("https://www.themealdb.com/api/json/v1/1/search.php?f=c")
    let meal = response.data;
    // console.log(meal)
    res.json(meal)
})

//route to call the api for a specific meal via mealId

app.get('/get-meal/:mealId', async (req, res) =>
{
    let response = await axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${req.params.mealId}`)
    let meal = response.data;
    res.json(meal)
})

app.get('/*', (req, res) =>
{
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(5000, () =>
{
    console.log("Server is listening on 5000")
})