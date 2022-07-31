import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://simple-contact-crud.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default httpClient;
