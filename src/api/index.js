import axios from "axios";
import {SERVER_URL} from "../utils/constants.js";

// const api_url = BASE_API_URL;

const API = axios.create({baseURL: SERVER_URL});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

// character requests to rick and morty api
export const fetchCharacters = () => API.get("/character/fetch");
export const loadMore = (nextPage) => API.get(`/character/load/${nextPage}`);
export const fetchDetails = (id) => API.get(`/character/fetch/${id}`);

// favourites requests to db
export const fetchFavourites = () => API.get("/character/favourites");
export const setFavourite = (characterId) =>
  API.post(`/character/favourites/${characterId}`, characterId);
export const removeFavourite = (characterId) =>
  API.delete(`/character/favourites/${characterId}`);

// auth requests to db
export const signin = (formData) => API.post("/user/signin", formData);
export const register = (formData) => API.post("user/register", formData);
