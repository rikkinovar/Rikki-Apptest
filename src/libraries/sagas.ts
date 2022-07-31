import {all} from 'redux-saga/effects';
// import {watchGetProfile} from './Profile/Profile.Saga';
// import {watchGetFollower} from './Follower/Follower.Saga';
import {watchGetContact} from '../modules/contact/data/contact.saga';

export default function* rootSaga() {
  // yield all([watchGetProfile(), watchGetFollower()]);
  yield all([watchGetContact()]);
}
