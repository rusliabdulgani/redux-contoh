import { 
  fetchingPostActionType, 
  successPostActionType, 
  errorPostActionType 
} from "../actionType"

const initialState = {
  loading: false,
  data: null,
  error: null
}

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchingPostActionType:
      return { ...state, loading: true, data: null, error: null }
    case successPostActionType:
      return { ...state, loading: false, data: action.payload, error: null }
    case errorPostActionType:
      return { ...state, loading: false, data: null, error: action.payload }
    default:
      return state
  }
}