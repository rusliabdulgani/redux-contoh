import { incrementActionType } from "../actionType"

const initialState = {
  count: 0,
}

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case incrementActionType:
      return { ...state, count: state.count + 1}
    case 'COUNTER/DECREMENT':
      return { ...state, count: state.count - 1}
    default:
      return state;
  }
}