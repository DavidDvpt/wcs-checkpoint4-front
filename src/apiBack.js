import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1';

export function getRealEstates() {
  const url = BASE_URL.concat('/realEstate');

  return axios.get(url);
}
