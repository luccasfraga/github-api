import axios from 'axios';

const apiUrl = process.env.REACT_APP_GITHUB_API_URL || 'https://api.github.com';
const token = process.env.REACT_APP_GITHUB_TOKEN;

const Api = {
  fetchRepositories: (username) => axios.get(`${apiUrl}/users/${username}/repos`, {
    headers: {
      Authorization: `token ${token}`,
    }
  }).then(res => res.data),
  fetchUserDetails: (username) => axios.get(`${apiUrl}/users/${username}`, {
    headers: {
      Authorization: `token ${token}`,
    }
  }).then(res => res.data),
  fetchRepositoryDetails: (fullName) => axios.get(`${apiUrl}/repos/${fullName}`, {
    headers: {
      Authorization: `token ${token}`,
    }
  }).then(res => res.data),
};

export default Api;
