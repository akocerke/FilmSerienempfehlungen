import axios from "axios";

const API_KEY = "1ad397f85b6fe90915ecb92e15c0a3cc";
const apiService = axios.create({ baseURL: "https://api.themoviedb.org/3/" });

export const fetchMovies = async () => {
  try {
    const response = await apiService.get("movie/top_rated", {
      params: {
        api_key: API_KEY,
        language: "de-DE",
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies", error);
    return [];
  }
};
