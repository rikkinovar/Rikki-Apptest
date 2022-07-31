import {call, put, takeLatest} from 'redux-saga/effects';
import {Action} from '../../../libraries/reducers';
import {
  addContactFail,
  addContactSuccess,
  ADD_CONTACT_REQUEST,
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

export function* watchAddContact() {
  yield takeLatest(ADD_CONTACT_REQUEST, handleAddContact);
}

function* handleAddContact(action: Action): any {
  const response = yield call(
    contactRepositoryImpl().addContact,
    action.payload,
  );
  if (!response.err) {
    yield call(handleGetContact);
    yield put(addContactSuccess(response.data));
  } else {
    yield put(addContactFail('Add contact failed'));
  }
}
