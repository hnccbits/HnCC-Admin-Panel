import axiosInstance from './axios';

let responseData = {
  data: null,
  message: 'API not called',
  type: 'error',
};

export const getAllMeets = async () => {
  await axiosInstance
    .get('/meets/')
    .then(async (res) => {
      if (res.status === 200) {
        responseData.data = res.data;
        responseData.message =
          'Successfully fetched the your info from the server';
        responseData.type = 'success';
      } else throw res;
    })
    .catch((err) => {
      responseData.data = null;
      responseData.message =
        `${err.statusText} | code: ${err.status}` ||
        'Something went wrong while fetching the your info';
      responseData.type = 'error';
    });

  return responseData;
};

export const createMeet = async (data) => {
  await axiosInstance
    .post('/meets/', data)
    .then((res) => {
      if (res.status === 201) {
        responseData.data = res.data;
        responseData.message = 'Successfully created the meet';
        responseData.type = 'success';
      } else throw res;
    })
    .catch((err) => {
      responseData.data = null;
      responseData.message =
        `${err.statusText} | code: ${err.status}` ||
        'Something went wrong while fetching the your info';
      responseData.type = 'error';
    });

  return responseData;
};
