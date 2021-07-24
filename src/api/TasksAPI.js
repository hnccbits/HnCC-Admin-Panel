import axiosInstance from './axios';

let responseData = {
  data: null,
  message: 'API not called',
  type: 'error',
};

export const listTasks = async () => {
  axiosInstance
    .get('/tasks/')
    .then((res) => {
      if (res.status === 200) {
        responseData.data = res.data;
        responseData.message = `${res.statusText} | Succesfully fetched the tasks`;
        responseData.type = 'success';
      } else throw res;
    })
    .catch((err) => {
      console.log(err);
      responseData.data = null;
      responseData.message = `Something went wrong | ${err.status} | ${err.statusText}`;
      responseData.type = 'error';
    });

  return responseData;
};
