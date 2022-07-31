import {
  GET_CONTACT_REQUEST,
  GET_CONTACT_FAIL,
  GET_CONTACT_SUCCESS,
} from './contact.action';
import {Action, State} from '../../../libraries/reducers';

const initialState: State = {fetching: false, data: null, err: null};

export const getContact = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case GET_CONTACT_REQUEST:
      return {
        fetching: true,
        data: null,
        err: null,
      };
    case GET_CONTACT_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data,
        err: null,
      };
    case GET_CONTACT_FAIL:
      return {
        fetching: false,
        data: null,
        err: action.payload.err,
      };
    default:
      return state;
  }
};
