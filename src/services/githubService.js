// src/services/githubService.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';

export const fetchUsers = async (query) => {
  const response = await axios.get(`${BASE_URL}?q=${query}`);
  return response.data.items;
};

export const fetchUserDetails = async (username) => {
  const response = await axios.get(`${BASE_URL}/${username}`);
  return response.data;
};
