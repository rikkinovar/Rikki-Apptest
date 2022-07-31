import httpClient from '../../../../libraries/httpClient';
import {IContact, ICreateContacParams} from '../../domain/contactEntities';

export const getContact = async () => {
  const res = await httpClient.get<IContact[] | undefined>('/contact');
  return res.data;
};

export const addContact = async (param: ICreateContacParams) => {
  const res = await httpClient.post('/contact', param);
  return res.data;
};
