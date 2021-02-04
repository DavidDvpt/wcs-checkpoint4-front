import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1';

const axiosconfig = {
  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}`,
  },
};

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

export function getVisitQuantityBiDateAndId(id, selectedDate) {
  const url = BASE_URL.concat(`/realEstate/${id}?selectedDate=${selectedDate}`);

  return axios.get(url);
}

export function postVisit(data) {
  const url = BASE_URL.concat('/visit');

  return axios.post(url, data);
}

export function putRealEstateMaxVisite(id, data) {
  const url = BASE_URL.concat(`/realEstate/${id}`);

  return axios.put(url, data);
}

//* **************************************
//* Authentication
//* **************************************
export function getAuth(data) {
  const url = BASE_URL.concat('/auth');

  return axios.post(url, data);
}

export function tokencheck() {
  const url = BASE_URL.concat('/adminRoutes/authCheck');

  return axios.get(url, axiosconfig);
}
