let responseData = {
  data: null,
  message: 'API not called',
  type: 'error',
};

const getAllUsers = async () => {
  await fetch('http://127.0.0.1:8000/api/user/')
    .then(async (res) => {
      if (res.status === 200) {
        const data = await res.json();
        responseData.data = data;
        responseData.message = 'Successfully fetched the user from the server';
        responseData.type = 'success';
      } else throw res;
    })
    .catch((err) => {
      console.log(err);
      responseData.data = null;
      responseData.message =
        `${err.statusText} | code: ${err.status}` ||
        'Something went wrong while fetching the users';
      responseData.type = 'error';
    });

  return responseData;
};

const getUserByYear = async (input) => {
  await fetch(`http://127.0.0.1:8000/api/user?year=${input}`)
    .then(async (res) => {
      if (res.status === 200) {
        const data = await res.json();
        responseData.data = data;
        responseData.message = 'Successfully fetched the user from the server';
        responseData.type = 'success';
      } else throw res;
    })
    .catch((err) => {
      console.log(err);
      responseData.data = null;
      responseData.message =
        `${err.statusText} | code: ${err.status}` ||
        'Something went wrong while fetching the users';
      responseData.type = 'error';
    });

  return responseData;
};

const BackendApi = {
  getAllUsers,
  getUserByYear,
};

export default BackendApi;
