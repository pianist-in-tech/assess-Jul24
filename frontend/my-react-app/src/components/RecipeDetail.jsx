import React, { useEffect, useState } from 'react';
import { getRecipeById } from '../Api';

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
  
  if (recipeId) {
    fetchRecipe();
  }
}, [recipeId]);
    
if (!recipe)return <div>Select a recipe to see the details.</div>;
  
  return (
    <div>
      <h1>{recipe.name}</h1>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeDetail;
