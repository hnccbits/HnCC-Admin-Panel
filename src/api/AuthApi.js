import axios from 'axios';
import storageTokens from '../context/storage';

const loginUser = async (email, password) => {
  await axios
    .post('http://127.0.0.1:8000/api/token/', { email, password })
    .then(async (res) => {
      if (res.status === 200) {
        storageTokens.storeTokens(res.data.access, res.data.refresh, email);
      } else throw res;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default loginUser;
