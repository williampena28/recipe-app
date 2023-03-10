const express = require('express')
const path = require('path')
// logs the different requests to our server
const logger = require('morgan')
const axios = require('axios');
// cross origin access
const cors = require('cors')

require('dotenv').config();
require('./config/database.js')

const MyMeal = require('./models/mymeals.js')

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

app.get('/get-meal-data/:mealString', async (req, res) =>
{
    // call API
    // this route gives us all meals that match the mealString
    let response = await axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${req.params.mealString}`)
    let meal = response.data;
    // console.log(meal)
    res.json(meal)
})

// route to call the api for a specific meal via mealId

app.get('/get-meal/:mealId', async (req, res) =>
{
    let response = await axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${req.params.mealId}`)
    let meal = response.data;
    res.json(meal)
})

// GET meal data from the bookmarks db
app.get('/get-bookmarks-data', async (req, res) =>
{
    let bookmarks = await MyMeal.find({})
    res.send(bookmarks);
})

// GET bookmark data by id
app.get('/get-bookmark/:id', async (req, res) =>
{
    let response = await MyMeal.findById(req.params.id)
    res.send(response);
})

// ADD the meal to our bookmarks
app.post('/add-to-bookmarks', async (req, res) =>
{
    let newMeal = await MyMeal.create(req.body);
    res.send(newMeal);
})

// DELETE a meal from our bookmarks
app.delete('/delete-from-bookmarks/:mealId', async (req, res) =>
{
    let response = await MyMeal.findOneAndDelete(req.params.mealId).then((meal) =>
    {
        res.status(200).json(meal);
    });
})

// UPDATE instructions in our bookmarks
app.put('/update_bookmark/:mealId', async (req, res) =>
{
    let updateInfo = req.body
    let response = await MyMeal.findByIdAndUpdate(req.params.mealId, updateInfo).then((meal) =>
    {{
        res.status(200).json(meal);
    }})
})

app.get('/*', (req, res) =>
{
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(5000, () =>
{
    console.log("Server is listening on 5000")
})