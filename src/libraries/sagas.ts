import {all} from 'redux-saga/effects';
import {
  watchGetContact,
  watchAddContact,
  watchDeleteContact,
  watchUpdateContact,
} from '../modules/contact/data/contact.saga';

export default function* rootSaga() {
  yield all([
    watchGetContact(),
    watchAddContact(),
    watchDeleteContact(),
    watchUpdateContact(),
  ]);
}
