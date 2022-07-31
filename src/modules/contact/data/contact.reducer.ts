import {
  GET_CONTACT_REQUEST,
  GET_CONTACT_FAIL,
  GET_CONTACT_SUCCESS,
  ADD_CONTACT_REQUEST,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_FAIL,
  DELETE_CONTACT_REQUEST,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_FAIL,
  UPDATE_CONTACT_REQUEST,
  UPDATE_CONTACT_SUCCESS,
  UPDATE_CONTACT_FAIL,
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

export const addContact = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ADD_CONTACT_REQUEST:
      return {
        fetching: true,
        data: null,
        err: null,
      };
    case ADD_CONTACT_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data,
        err: null,
      };
    case ADD_CONTACT_FAIL:
      return {
        fetching: false,
        data: null,
        err: action.payload.err,
      };
    default:
      return state;
  }
};

export const deleteContact = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case DELETE_CONTACT_REQUEST:
      return {
        fetching: true,
        data: null,
        err: null,
      };
    case DELETE_CONTACT_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data,
        err: null,
      };
    case DELETE_CONTACT_FAIL:
      return {
        fetching: false,
        data: null,
        err: action.payload.err,
      };
    default:
      return state;
  }
};

export const updateContact = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case UPDATE_CONTACT_REQUEST:
      return {
        fetching: true,
        data: null,
        err: null,
      };
    case UPDATE_CONTACT_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data,
        err: null,
      };
    case UPDATE_CONTACT_FAIL:
      return {
        fetching: false,
        data: null,
        err: action.payload.err,
      };
    default:
      return state;
  }
};
