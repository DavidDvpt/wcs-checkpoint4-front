import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1';

export function getRealEstates() {
  const url = BASE_URL.concat('/realEstate');

  return axios.get(url);
}

export function getFamilyList() {
  const url = BASE_URL.concat('/family');

  return axios.get(url);
}

export function getRealEstatesList() {
  const url = BASE_URL.concat('/realEstate');

  return axios.get(url);
}

export function getAuth(data) {
  const url = BASE_URL.concat('/auth');

  return axios.post(url, data);
}
