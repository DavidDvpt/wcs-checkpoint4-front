import { SET_ANIMATING_FALSE, SET_ANIMATING_TRUE } from './actionType';

const initalState = {
  animating: false,
};

export default function carouselReducer(state = initalState, action) {
  switch (action.type) {
    case SET_ANIMATING_FALSE:
      return { ...state, animating: false };
    case SET_ANIMATING_TRUE:
      return { ...state, animating: true };
    default:
      return state;
  }
}
