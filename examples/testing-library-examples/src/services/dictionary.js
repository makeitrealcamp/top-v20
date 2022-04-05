import axios from 'axios';

const baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en';

export const getMeaning = ({ word = 'cat' }) => {
  return axios.get(`${baseUrl}/${word}`);
}
