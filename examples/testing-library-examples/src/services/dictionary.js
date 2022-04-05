import axios from 'axios';

const baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/es';

export const getMeaning = ({ word = 'gato' }) => {
  return axios.get(`${baseUrl}/${word}`);
}
