import {
  IContactRepository,
  ICreateContacParams,
} from '../domain/contactEntities';
import {getContact, addContact as addContactApi} from './http/contact.http';

const contactRepositoryImpl = (): IContactRepository => {
  const getContactList = async () => {
    return await getContact();
  };

  const addContact = async (param: ICreateContacParams) => {
    return await addContactApi(param);
  };

  return {getContactList, addContact};
};

export default contactRepositoryImpl;
