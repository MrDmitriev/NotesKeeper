import axios from 'axios';


const createAPI = () => {
  const api = axios.create({
    baseURL: `http://private-9aad-note10.apiary-mock.com`,
    timeout: 5000,
    withCredentials: false,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onError = (err) => {

    return err;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};

export default createAPI;