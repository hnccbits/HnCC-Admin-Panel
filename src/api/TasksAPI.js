import axiosInstance from './axios';

let responseData = {
  data: null,
  message: 'API not called',
  type: 'error',
};

export const listTasks = async () => {
  await axiosInstance
    .get('/tasks/')
    .then((res) => {
      if (res.status === 200) {
        responseData.data = res.data;
        responseData.message = `${res.statusText} | Succesfully fetched the tasks`;
        responseData.type = 'success';
      } else throw res;
    })
    .catch((err) => {
      responseData.data = null;
      responseData.message = `Something went wrong | ${err.status} | ${err.statusText}`;
      responseData.type = 'error';
    });

  return responseData;
};

// export const CreateTask = async (input) => {
//   await axiosInstance.post("/tasks")
// }

export const UpdateTask = async (input) => {
  await axiosInstance
    .patch(`/tasks/task/${input.id}/`)
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        responseData.data = res.data;
        responseData.message = 'Successfully updated the task';
        responseData.type = 'success';
      } else throw res;
    })
    .catch((err) => {
      responseData.data = null;
      responseData.message =
        err.status !== undefined
          ? `${err.status} | ${err.statusText} `
          : 'Something went wrong';
      responseData.type = 'error';
    });

  return responseData;
};
