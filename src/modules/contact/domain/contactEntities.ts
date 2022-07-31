export interface IContact {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  photo: string;
}

export interface ICreateContacParams {
  firstName: string;
  lastName: string;
  age: number;
  photo: string;
}

export interface IContactRepository {
  getContactList: () => Promise<IContact[] | undefined>;
  addContact: (param: ICreateContacParams) => Promise<any>;
  updateContact: (param: ICreateContacParams, id: string) => Promise<any>;
  deleteContact: (id: string) => Promise<any>;
}
