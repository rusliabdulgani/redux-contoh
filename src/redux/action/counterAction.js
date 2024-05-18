import { createAction } from 'redux-actions'
import { incrementActionType } from '../actionType'

const increment = createAction(incrementActionType)

export const incrementAction = () => (dispatch) => {
  dispatch(increment())
}