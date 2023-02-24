const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema
({

})

const MyMeal = mongoose.model('myMeals', mealSchema);
module.exports = MyMeal;