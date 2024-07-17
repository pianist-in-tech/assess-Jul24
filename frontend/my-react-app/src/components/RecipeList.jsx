import React, { useEffect, useState } from 'react';
import { getRecipes } from '../Api';
import './Styles.css';

const RecipeList = ({ onSelectRecipe }) => {
  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
    const fetchRecipes = async () => {
        try {
            const data = await getRecipes();
            console.log(data)
            setRecipes(data);
        } catch (error){
            console.error('Error fetching recipes:', error);
        }
    };

    fetchRecipes();
}, []);

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
