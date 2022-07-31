import {IContact, ICreateContacParams} from '../domain/contactEntities';

export const GET_CONTACT_REQUEST = 'GET_CONTACT_REQUEST';
export const GET_CONTACT_SUCCESS = 'GET_CONTACT_SUCCESS';
export const GET_CONTACT_FAIL = 'GET_CONTACT_FAIL';

export const ADD_CONTACT_REQUEST = 'ADD_CONTACT_REQUEST';
export const ADD_CONTACT_SUCCESS = 'ADD_CONTACT_SUCCESS';
export const ADD_CONTACT_FAIL = 'ADD_CONTACT_FAIL';

export const DELETE_CONTACT_REQUEST = 'DELETE_CONTACT_REQUEST';
export const DELETE_CONTACT_SUCCESS = 'DELETE_CONTACT_SUCCESS';
export const DELETE_CONTACT_FAIL = 'DELETE_CONTACT_FAIL';

export const UPDATE_CONTACT_REQUEST = 'UPDATE_CONTACT_REQUEST';
export const UPDATE_CONTACT_SUCCESS = 'UPDATE_CONTACT_SUCCESS';
export const UPDATE_CONTACT_FAIL = 'UPDATE_CONTACT_FAIL';

export const getContactRequest = () => {
  return {type: GET_CONTACT_REQUEST, payload: null};
};
export const getContactSuccess = (data: IContact[]) => {
  return {type: GET_CONTACT_SUCCESS, payload: {data}};
};
export const getContactFail = (err: any) => {
  return {type: GET_CONTACT_FAIL, payload: {err}};
};

export const addContactRequest = (param: ICreateContacParams) => {
  return {type: ADD_CONTACT_REQUEST, payload: param};
};
export const addContactSuccess = (data: object) => {
  return {type: ADD_CONTACT_SUCCESS, payload: {data}};
};
export const addContactFail = (err: any) => {
  return {type: ADD_CONTACT_FAIL, payload: {err}};
};

export const deleteContactRequest = (param: ICreateContacParams) => {
  return {type: DELETE_CONTACT_REQUEST, payload: param};
};
export const deleteContactSuccess = (data: object) => {
  return {type: DELETE_CONTACT_SUCCESS, payload: {data}};
};
export const deleteContactFail = (err: any) => {
  return {type: DELETE_CONTACT_FAIL, payload: {err}};
};

export const updateContactRequest = (
  param: ICreateContacParams,
  id: string,
) => {
  return {type: UPDATE_CONTACT_REQUEST, payload: {data: param, id}};
};
export const updateContactSuccess = (data: object) => {
  return {type: UPDATE_CONTACT_SUCCESS, payload: {data}};
};
export const updateContactFail = (err: any) => {
  return {type: UPDATE_CONTACT_FAIL, payload: {err}};
};
