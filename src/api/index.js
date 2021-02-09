import axios from 'axios';
import { BASE_API_URL, SERVER_URL } from '../utils/constants.js';

const api_url = BASE_API_URL;
const server_url = `${SERVER_URL}/character`;

export const fetchCharacters = () => axios.get(`${api_url}/character`);
export const fetchDetails = (id) => axios.get(`${api_url}/character/${id}`);

export const fetchFavourites = () => axios.get(`${server_url}/faves`);
export const setFavourite = (characterId) => axios.post(`${server_url}/${characterId}`, characterId);
export const removeFavourite = (characterId) => axios.delete(`${server_url}/${characterId}`);




