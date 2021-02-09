import axios from 'axios';
import { BASE_API_URL, SERVER_URL } from '../utils/constants.js';

const api_url = BASE_API_URL;
const server_url = SERVER_URL;

export const fetchCharacters = () => axios.get(`${api_url}/character`);
export const fetchDetails = (id) => axios.get(`${api_url}/character/${id}`);
// export const setFavourite = (id, favourite) => axios.get(`${server_url}/faves`);




