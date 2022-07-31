import {call, put, takeLatest} from 'redux-saga/effects';
import {
  getContactFail,
  getContactSuccess,
  GET_CONTACT_REQUEST,
} from './contact.action';
import contactRepositoryImpl from './contactRepositoryImpl';

export function* watchGetContact() {
  yield takeLatest(GET_CONTACT_REQUEST, handleGetContact);
}

function* handleGetContact(): any {
  const response = yield call(contactRepositoryImpl().getContactList);
  if (!response.err) {
    yield put(getContactSuccess(response.data));
  } else {
    yield put(getContactFail('Get contact failed'));
  }
}
