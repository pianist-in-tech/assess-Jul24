import React, { useState } from 'react'
import Header from './components/Header'
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
      <Header />
    </div>
      <div>
        <RecipeList onSelectRecipe={handleSelectRecipe} />
        <RecipeDetail recipeId={selectedRecipeId} />
      </div>
    </>
  )
}

export default App
