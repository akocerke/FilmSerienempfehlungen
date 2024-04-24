import axios from "axios";

const API_KEY = "1ad397f85b6fe90915ecb92e15c0a3cc";
const apiService = axios.create({ baseURL: "https://api.themoviedb.org/3/" });

export const fetchMovies = async () => {
  try {
    const response = await apiService.get("movie/popular", {
      params: {
        api_key: API_KEY,
        language: 'de-DE',
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Fehler beim Abrufen von Filmen", error);
    return [];
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await apiService.get(`movie/${movieId}`, {
      params: {
        api_key: API_KEY,
        language: 'de-DE',
      },
    });
    return response.data;
  } catch (error) {
    console.error("Fehler beim Abrufen von Filmdetails", error);
    return null;
  }
};

export const fetchMovieActors = async (movieId) => {
  try {
    const response = await apiService.get(`movie/${movieId}/credits`, {
      params: {
        api_key: API_KEY,
        language: 'de-DE',
      },
    });
    return response.data.cast;
  } catch (error) {
    console.error("Fehler beim Abrufen von Schauspielern", error);
    return [];
  }
};

export const fetchMovieTrailer = async (movieId) => {
  try {
    const response = await apiService.get(`movie/${movieId}/videos`, {
      params: {
        api_key: API_KEY,
        language: 'de-DE',
      },
    });
    return response.data;
  } catch (error) {
    console.error("Fehler beim Abrufen vom Trailer", error);
    return null;
  }
};

export const fetchSeries = async () => {
  try {
    const response = await apiService.get("tv/popular", {
      params: {
        api_key: API_KEY,
        language: 'de-DE',
        page: '1',
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Fehler beim Abrufen von Serien", error);
    return [];
  }
};

export const fetchSeriesDetails = async (seriesId) => {
  try {
    const response = await apiService.get(`tv/${seriesId}`, {
      params: {
        api_key: API_KEY,
        language: 'de-DE',
      },
    });
    return response.data;
  } catch (error) {
    console.error("Fehler beim Abrufen von Seriendetails", error);
    return null;
  }
};

export const fetchSeriesActors = async (seriesId) => {
  try {
    const response = await apiService.get(`tv/${seriesId}/credits`, {
      params: {
        api_key: API_KEY,
        language: 'de-DE',
      },
    });
    return response.data.cast;
  } catch (error) {
    console.error("Fehler beim Abrufen von Schauspielern", error);
    return [];
  }
};