const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema
({
    mealId: Number,
    name: String,
    category: String,
    area: String,
    imgUrl: String,
    instructions: String,
    tags: [{tag: String}],
    ingrediants: [{ingrediants: String, measure: String}]
})

const MyMeal = mongoose.model('myMeals', mealSchema);
module.exports = MyMeal;