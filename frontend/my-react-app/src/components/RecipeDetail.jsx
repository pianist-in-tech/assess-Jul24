import React, { useEffect, useState } from 'react';
import { getRecipeById } from '../Api';
import './Styles.css';

const RecipeDetail = ({ recipeId }) => {
  const [recipe, setRecipe] = useState(null);
  
  useEffect(() => {
    const fetchRecipe = async () => {
        try {
            const data = await getRecipeById(recipeId);
            setRecipe(data);
        } catch (error) {
            console.error(`Error fetching recipe with id ${recipeId}:`, error);
        }
    };
  
    fetchRecipe();
  }, [recipeId]);
    
if (!recipe)return <div>Click on a recipe to see the details.</div>;


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
