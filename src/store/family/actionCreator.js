import SET_FAMILY_LIST from './actionType';

export default function setFamilyList(data) {
  return {
    type: SET_FAMILY_LIST,
    payload: {
      familyList: data,
    },
  };
}
