import {
  AUTO_COMPLETE_REQUEST,
  AUTO_COMPLETE_SUCCESS,
  AUTO_COMPLETE_FAIL,
  AUTO_COMPLETE_RESET,
} from './autoCompleteConstants.js'
import { GENERAL_RESET } from '../general/generalConstants'

export const autoCompleteReducer = (
  state = { results: [], isSearch: false },
  action
) => {
  const { type, payload } = action

  switch (type) {
    case AUTO_COMPLETE_REQUEST:
      return { ...state, loading: true }
    case AUTO_COMPLETE_SUCCESS:
      return { loading: false, results: payload, isSearch: true }
    case AUTO_COMPLETE_FAIL:
      return { loading: false, error: payload }
    case GENERAL_RESET:
    case AUTO_COMPLETE_RESET:
      return { ...state, results: [], loading: false }
    default:
      return state
  }
}
