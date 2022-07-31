import {
  IContactRepository,
  ICreateContacParams,
} from '../domain/contactEntities';
import {
  getContact,
  addContact as addContactApi,
  deleteContact as deleteContactApi,
  updateContact as updateContactApi,
} from './http/contact.http';

const contactRepositoryImpl = (): IContactRepository => {
  const getContactList = async () => {
    return await getContact();
  };

  const addContact = async (param: ICreateContacParams) => {
    return await addContactApi(param);
  };

  const deleteContact = async (id: string) => {
    return await deleteContactApi(id);
  };

  const updateContact = async (param: ICreateContacParams, id: string) => {
    return await updateContactApi(param, id);
  };

  return {getContactList, addContact, deleteContact, updateContact};
};

export default contactRepositoryImpl;
