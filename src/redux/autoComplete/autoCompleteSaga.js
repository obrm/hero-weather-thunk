import { takeEvery } from 'redux-saga/effects'

import {
  AUTO_COMPLETE_REQUEST,
  AUTO_COMPLETE_SUCCESS,
  AUTO_COMPLETE_FAIL,
} from './autoCompleteConstants.js'

export function* fetchAutoCompleteRequestsAsync() {}

export function* getAutoCompleteResults(query) {
  yield takeEvery(AUTO_COMPLETE_REQUEST, fetchAutoCompleteRequestsAsync)
}
