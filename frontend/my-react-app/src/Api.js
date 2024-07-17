import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api/";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getRecipes = async () => {
  try {
    const response = await api.get("recipes/");
    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};

export const getRecipeById = async (id) => {
  try {
    const response = await api.get(`recipes/${id}/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching recipe with id ${id}:`, error);
    throw error;
  }
};

// export const addRecipe = async (recipe) => {
//   try {
//     const response = await api.post(`recipes/`, recipe);
//     return response.data;
//   } catch (error) {
//     console.error(`Error adding recipe`, error);
//     throw error;
//   }
// };

export const updateRecipe = async (id, updatedRecipe) => {
  try {
    const response = await api.put(`recipes/update-delete/${id}/`, updatedRecipe);
    return response.data;
  } catch (error) {
    console.error(`Error updating recipe with id ${id}:`, error);
    throw error;
  }
};

export const deleteRecipe = async (id) => {
  try {
    await api.delete(`recipes/update-delete/${id}/`);
  } catch (error) {
    console.error(`Error deleting recipe with id ${id}:`, error);
    throw error;
  }
};


