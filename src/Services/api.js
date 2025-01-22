import axios from "axios";

const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export const fetchPokemons = async (limit = 50) => {
  try {
    const response = await axios.get(`${API_BASE_URL}?limit=${limit}`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching Pokemons:", error);
    return [];
  }
};
