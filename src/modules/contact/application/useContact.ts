import contactRepositoryImpl from '../data/contactRepositoryImpl';

export const useContact = () => {
  const getContactList = async () => {
    const res = await contactRepositoryImpl().getContactList();
    return res;
  };

  return {getContactList};
};
