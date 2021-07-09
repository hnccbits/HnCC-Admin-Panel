export const accessauthKey = 'accessHnCCAmin';
export const refreshauthKey = 'refreshHnCCAdmin';
export const userData = 'userDataHnCCAdmin';

const storeTokens = (accessToken, refreshToken, data) => {
  try {
    localStorage.setItem(accessauthKey, accessToken);
    localStorage.setItem(refreshauthKey, refreshToken);
    localStorage.setItem(userData, data);
  } catch (error) {
    console.log(error);
  }
};

const getUserDataToken = () => {
  try {
    return localStorage.getItem(userData);
  } catch (error) {
    console.log(error);
  }
};

const getRefreshToken = () => {
  try {
    return localStorage.getItem(refreshauthKey);
  } catch (error) {
    console.log(error);
  }
};

const getToken = () => {
  try {
    return localStorage.getItem(accessauthKey);
  } catch (error) {
    console.log(error);
  }
};

const removeToken = () => {
  try {
    localStorage.clear();
  } catch (error) {
    console.log(error);
  }
};

const storageTokens = {
  getToken,
  storeTokens,
  removeToken,
  getRefreshToken,
  getUserDataToken,
};

export default storageTokens;
