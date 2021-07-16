export const accessauthKey = 'accessHnCCAdmin';
export const refreshauthKey = 'refreshHnCCAdmin';
export const userData = 'userDataHnCCAdmin';

export const storeTokens = (accessToken, refreshToken) => {
  try {
    localStorage.setItem(accessauthKey, accessToken);
    localStorage.setItem(refreshauthKey, refreshToken);
  } catch (error) {
    console.log(error);
  }
};

export const getRefreshToken = () => {
  try {
    return localStorage.getItem(refreshauthKey);
  } catch (error) {
    console.log(error);
  }
};

export const getToken = () => {
  try {
    return localStorage.getItem(accessauthKey);
  } catch (error) {
    console.log(error);
  }
};

export const removeToken = () => {
  try {
    localStorage.clear();
  } catch (error) {
    console.log(error);
  }
};
