import axiosInstance from './axios';

let responseData = {
  data: null,
  message: 'API not called',
  type: 'error',
};

export const getAllEvents = async () => {
  await axiosInstance
    .get('/events/')
    .then((res) => {
      if (res.status === 200) {
        responseData.data = res.data;
        responseData.message = 'Successfully fetched the events';
        responseData.type = 'success';
      } else throw res;
    })
    .catch((err) => {
      responseData.data = null;
      responseData.message =
        err && err.status
          ? `${err.status} | ${err.statusText}`
          : 'Something went wrong';
      responseData.type = 'error';
    });

  return responseData;
};

export const createEvent = async (input) => {
  await axiosInstance
    .post('/events/', input)
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        responseData.data = res.data;
        responseData.message = 'Successfully fetched the events';
        responseData.type = 'success';
      } else throw res;
    })
    .catch((err) => {
      responseData.data = null;
      responseData.message =
        err && err.status
          ? `${err.status} | ${err.statusText}`
          : 'Something went wrong';
      responseData.type = 'error';
    });

  return responseData;
};
