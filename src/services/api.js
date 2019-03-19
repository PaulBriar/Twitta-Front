import axios from 'axios';

export const setTokenHeader = token => {
  if (token) {
    axios.default.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.default.headers.common["Authorization"];
  }
}

/*
  A wrapper around axios API call that formats errors, etc
  @param {string} method - the http verb we want to use
  @param {string} path - the route path / endpoint
  @param {object} data = (optional) data in JSON form for POST requests
*/
const apiCall = (method, path, data) => {
  return new Promise((resolve, reject) => {
    return axios[method](path, data)
      .then(res => {
        return resolve(res.data);
    }).catch(err => {
        return reject(err.response.data.error);
    })
  })
}

export default apiCall;