import axios from 'axios';

export const post = (url, params) => {
  return axios.post(url, params)
  .then(() => {
    console.log('success');
  })
  .catch((err) => {
    console.log(err);
  });
}