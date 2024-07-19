import axios from "axios";

// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_BASE_URL = `http://localhost:800`;

const api = axios.create({
  baseURL: API_BASE_URL,// Setting the base URL for axios instance
  headers: {
    "Content-Type": "application/json",// Setting content type to JSON
  },
});

// Function to fetch all recipes
export const getRecipes = async () => {
  try {
    const response = await api.get("recipes/");
    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};

// Function to fetch a single recipe by its ID
export const getRecipeById = async (id) => {
  try {
    const response = await api.get(`recipes/${id}/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching recipe with id ${id}:`, error);
    throw error;
  }
};

// Function to update an existing recipe by its ID
export const updateRecipe = async (id, updatedRecipe) => {
  try {
    const response = await api.put(`recipes/update-delete/${id}/`, updatedRecipe);
    return response.data;
  } catch (error) {
    console.error(`Error updating recipe with id ${id}:`, error);
    throw error;
  }
};

// Function to delete a recipe by its ID
export const deleteRecipe = async (id) => {
  try {
    await api.delete(`recipes/update-delete/${id}/`);
  } catch (error) {
    console.error(`Error deleting recipe with id ${id}:`, error);
    throw error;
  }
};


