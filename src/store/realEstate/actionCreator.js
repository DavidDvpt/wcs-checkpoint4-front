import { SET_REALESTATE_LIST } from "./actionType";

export function setRealEstateList(data) {
  return {
    type: SET_REALESTATE_LIST,
    payload: {
      realEstateList: data
    }
  }
}