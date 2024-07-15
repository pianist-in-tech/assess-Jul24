import React, { useState } from 'react'
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import './App.css'

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  const handleSelectRecipe = (id) => {
    setSelectedRecipeId(id);
  };

  return (
    <>
      <div>
        <RecipeList onSelectRecipe={handleSelectRecipe} />
        <RecipeDetail recipeId={selectedRecipeId} />
      </div>
    </>
  )
}

export default App
