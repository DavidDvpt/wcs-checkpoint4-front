import { SET_ANIMATING_FALSE, SET_ANIMATING_TRUE } from "./actionType";

export function setAnimatingFalse(){
  return {
    type: SET_ANIMATING_FALSE,
    payload: {
    }
  }
}

export function setAnimatingTrue(){
  return {
    type: SET_ANIMATING_TRUE,
    payload: {
    }
  }
}