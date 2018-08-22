import {
  INCREMENT_COUNT,
  DECREMENT_COUNT,
} from './actionTypes';

export function incrementCount() {
  return {
    type: INCREMENT_COUNT,
  }
}

export function decrementCount() {
  return {
    type: DECREMENT_COUNT,
  }
}