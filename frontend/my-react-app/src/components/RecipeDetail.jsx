import React, { useEffect, useState } from 'react';
import { getRecipeById } from '../Api';
import './Styles.css';

const RecipeDetail = ({ recipeId }) => {
  // State variable to store the fetched recipe data
  const [recipe, setRecipe] = useState(null);

  // Effect hook to fetch recipe data when the component mounts or recipeId changes
  useEffect(() => {
    const fetchRecipe = async () => {
        try {
            const data = await getRecipeById(recipeId); // Fetch recipe data using API function
            setRecipe(data); // Update state with fetched recipe data
        } catch (error) {
            console.error(`Error fetching recipe with id ${recipeId}:`, error);
        }
    };
  
    fetchRecipe(); // Invoke fetchRecipe function when component mounts or recipeId changes
  }, [recipeId]); // Depend on recipeId to re-fetch recipe data when it changes
    
  // Conditional rendering if recipe data is not yet fetched
if (!recipe)return <div>Click on a recipe to see the details.</div>;

// Render recipe details if recipe data is available
  return (
    <div className='recipe-detail-container'>
      <h2>{recipe.name}</h2>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Istructions</h3>
      <ul>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ul>
        <div>
      {recipe.image_url && (
        <img
        src={recipe.image_url}
        alt={recipe.name}
        className='recipe-image'
        />
      )}
      </div>
    </div>
  );
};

export default RecipeDetail;
