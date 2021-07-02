const key = 'authToken';

const storeToken = async (authToken) => {
  try {
    localStorage.setItem(key, JSON.stringify(authToken));
  } catch (error) {
    console.log(error);
  }
};

const getToken = async () => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.log('====================================');
    console.log(error);
    console.log('====================================');
  }
};

const removeToken = async () => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log('====================================');
    console.log(error);
    console.log('====================================');
  }
};

// eslint-disable-next-line
export default {
  getToken,
  storeToken,
  removeToken,
};
