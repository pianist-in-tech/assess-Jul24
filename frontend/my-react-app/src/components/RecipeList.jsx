import React, { useEffect, useState } from 'react';
import { getRecipes } from '../Api';

const RecipeList = ({ onSelectRecipe }) => {
  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
    const fetchRecipes = async () => {
        try {
            const data = await getRecipes();
            setRecipes(data);
        } catch (error){
            console.error('Error fetching recipes:', error);
        }
    };

    fetchRecipes();
}, []);

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id} >
            {recipe.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
