import * as actions from '../Actions/actionTypes';

const counts = (state = 20, action) => {
  switch (action.type) {
    case actions.INCREMENT_COUNT: {
      console.log("Plus")
      console.log(state)
      return state + 1
    }
    case actions.DECREMENT_COUNT: {
      console.log("Minus")
      console.log(state)
      return state - 1 < 1 ? state : state - 1
    }
    default: {
      return state
    }
  }
}

export default counts
