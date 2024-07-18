import React, { useEffect, useState } from 'react';
import { getRecipes } from '../Api';
import './Styles.css';

const RecipeList = ({ onSelectRecipe }) => {
  const [recipes, setRecipes] = useState([]);
  
  // Effect hook to fetch recipes when the component mounts
  useEffect(() => {
    const fetchRecipes = async () => {
        try {
            const data = await getRecipes();// Fetch recipes using API function
            setRecipes(data);// Update state with fetched recipes
        } catch (error){
            console.error('Error fetching recipes:', error);
        }
    };

    fetchRecipes();// Invoke fetchRecipes function when component mounts
}, []);

 // Render the list of recipes
  return (
    <div className='recipe-list-container'>
      <h3>Recipes</h3>
      <ul className='recipe-list'>
        {recipes.map((recipe) => (
          <li key={recipe.id} onClick={() => onSelectRecipe(recipe.id)}>
            {recipe.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
