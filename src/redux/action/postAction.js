import { createAction } from "redux-actions";
import { 
  fetchingPostActionType,
  successPostActionType,
  errorPostActionType
 } from "../actionType";

const fetching = createAction(fetchingPostActionType)
const success = createAction(successPostActionType)
const error = createAction(errorPostActionType)

export const fetchPostAction = () => async (dispatch) => {
    try {
      dispatch(fetching()) //loading
      const postRaw = await fetch('https://jsonplaceholder.typicode.com/posts/1')
      const post = await postRaw.json()
      dispatch(success(post))
    } catch (e) {
      dispatch(error(e))
    }
}