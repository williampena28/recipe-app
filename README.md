# React Recipe App

## introduction:

This react app is for those who want to keep track of all their favorite meals in one webpage as it uses https://www.themealdb.com/ free API that gives the application access to it's 100+ recipe database. It features a nav bar which lets you alternate between your bookmarks tab and a main page where the user is able to search for any recipes that is available on themealdb. For the user's bookmarks, they are able to update the instructions on how to make the recipe that was bookmarked for any special changes they would like to make before making their meal.  

### Technologies Used:

API: https://www.themealdb.com/api.php

Libraries: Create React App, axios, mongoose, dotenv, and express.js

### Getting Started:
Into the command terminal, use `git clone https://github.com/williampena28/recipe-app.git`. Once the repo has finished installing into your desired directory, do `npm i` to install all of the dependencies from the packgage.json that were used in this project. Finally, run `npm run dev` to run your dev environment.

To view the actual page for this app, go to https://mod-3.onrender.com

### Unsolved Problems: List any unsolved issues.
- Users looking to run their own dev envirnoment for this app may need to adjust the config.js for a proper connection to their mongodb.

### Future Enhancements: Identify future features and enhancements planned for the project.
- A working passport functionality so that users may sign up and log in to view their own recipes they may have bookmarked.

- A 'Surprise me!' tab on the nav bar where the user will be redirected to page where they are given a random recipe.