// Example of toggling visibility of a section
document.addEventListener('DOMContentLoaded', function() {
    const farmingSection = document.getElementById('farming');
    const farmingToggleBtn = document.getElementById('toggleFarming');

    farmingToggleBtn.addEventListener('click', function() {
        farmingSection.classList.toggle('hidden');
    });
});


const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public')); // Serve static files like CSS and images from 'public' folder

app.post('/submitRecipe', (req, res) => {
    const { title, ingredients, instructions } = req.body;
    // Process and store the submitted recipe data
    // Example: Store in a database or file

    res.send('Recipe submitted successfully!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sustainableFoodPlatform', { useNewUrlParser: true, useUnifiedTopology: true });

const RecipeSchema = new mongoose.Schema({
    title: String,
    ingredients: [String],
    instructions: String,
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

// Example usage:
const newRecipe = new Recipe({
    title: 'Vegetarian Chili',
    ingredients: ['Beans', 'Tomatoes', 'Onions'],
    instructions: 'Combine ingredients and simmer for 30 minutes.'
});

newRecipe.save()
    .then(() => console.log('Recipe saved successfully!'))
    .catch(err => console.error(err));
