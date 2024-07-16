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
      <h3>{recipe.name}</h3>
      <p>{recipe.description}</p>
      {recipe.image_url && (
        <img
        src={recipe.image_url}
        alt={recipe.name}
        className='recipe-image'
        />
      )}
    </div>
  );
};

export default RecipeDetail;
