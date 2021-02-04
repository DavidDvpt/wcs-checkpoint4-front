import SET_REALESTATE_LIST from './actionType';

const initalState = {
  realEstateList: [],
};
export default function realEstateReducer(state = initalState, action) {
  switch (action.type) {
    case SET_REALESTATE_LIST:
      return { ...state, realEstateList: action.payload.realEstateList };
    default:
      return state;
  }
}
