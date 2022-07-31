import {all} from 'redux-saga/effects';
import {
  watchGetContact,
  watchAddContact,
} from '../modules/contact/data/contact.saga';

export default function* rootSaga() {
  yield all([watchGetContact(), watchAddContact()]);
}
