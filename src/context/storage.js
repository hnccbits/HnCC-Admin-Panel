import CreateNotifications from '../components/config/Notifications';

export const accessauthKey = 'accessHnCCAdmin';
export const refreshauthKey = 'refreshHnCCAdmin';
export const userData = 'userDataHnCCAdmin';

export const storeTokens = (accessToken, refreshToken) => {
  try {
    localStorage.setItem(accessauthKey, accessToken);
    localStorage.setItem(refreshauthKey, refreshToken);
  } catch (error) {
    CreateNotifications('error', `${error} | localstorage didn't respond.`);
  }
};

export const getRefreshToken = () => {
  try {
    return localStorage.getItem(refreshauthKey);
  } catch (error) {
    CreateNotifications('error', `${error} | localstorage didn't respond.`);
  }
};

export const getToken = () => {
  try {
    return localStorage.getItem(accessauthKey);
  } catch (error) {
    CreateNotifications('error', `${error} | localstorage didn't respond.`);
  }
};

export const removeToken = () => {
  try {
    localStorage.clear();
  } catch (error) {
    CreateNotifications('error', `${error} | localstorage didn't respond.`);
  }
};
