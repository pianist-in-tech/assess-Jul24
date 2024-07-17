import React, { useState } from 'react';
import axios from 'axios';
import './Styles.css';

const AddRecipe = () => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newRecipe = { name, ingredients, instructions, image };
      await axios.post('http://localhost:8000/api/recipes/', newRecipe);
      alert('Recipe added successfully!');
      setName('');
      setIngredients('');
      setInstructions('');
      setImage('');
    } catch (error) {
      console.error('Error adding recipe:', error);
      alert('Failed to add recipe.');
    }
  };

  return (
    <div className="add-recipe-container">
      <h3>Add a New Recipe</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipe Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
        <textarea
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
