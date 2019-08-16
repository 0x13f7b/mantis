/**
 * @flow strict
 * @format
 **/
const CurrentUser = {
  getApiToken: () => {
    return localStorage.getItem('apiToken');
  },
  getId: () => {
    return parseInt(localStorage.getItem('userId'));
  },
};

export default CurrentUser;
