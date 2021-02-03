import SET_FAMILY_LIST from './actionType';

const initialState = {
  familyList: [],
};
export default function familyReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FAMILY_LIST:
      return { ...state, familyList: action.payload.data };
    default:
      return state;
  }
}
