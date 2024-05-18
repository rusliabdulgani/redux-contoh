import { createStore, applyMiddleware, combineReducers } from "redux"
import { thunk } from "redux-thunk"
import { countReducer } from "../reducer/countReducer"
import { postReducer  } from "../reducer/postReducer"

const rootReducer = combineReducers({
  counter: countReducer,
  post: postReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))