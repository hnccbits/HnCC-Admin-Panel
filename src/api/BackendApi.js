import axios from 'axios';

let responseData = {
  data: null,
  message: 'API not called',
  type: 'error',
};

const getAllPosts = async () => {
  await fetch('http://127.0.0.1:8000/api/posts')
    .then(async (res) => {
      if (res.status === 200) {
        const data = await res.json();
        responseData.data = data;
        responseData.message = 'Successfully fetched the posts from the server';
        responseData.type = 'success';
      } else throw res;
    })
    .catch((err) => {
      console.log(err);
      responseData.data = null;
      responseData.message =
        `${err.statusText} | code: ${err.status}` ||
        'Something went wrong while fetching the posts';
      responseData.type = 'error';
    });

  return responseData;
};
const createPost = async (input) => {
  await axios
    .post('http://127.0.0.1:8000/api/posts', input)
    .then((res) => {
      if (res.status === 201) {
        responseData.data = null;
        responseData.message = `Successfully ${
          input.status === 'draft' ? 'drafted' : 'published'
        } the post.`;
        responseData.type = 'success';
      } else throw res;
    })
    .catch((err) => {
      responseData.data = null;
      responseData.message = err.statusText;
      responseData.type = 'error';
    });

  return responseData;
};

const BackendApi = {
  getAllPosts,
  createPost,
};

export default BackendApi;
