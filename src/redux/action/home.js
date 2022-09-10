import axios from 'axios';
import {API_HOST} from '../../config';

export const getDataBook = () => dispatch => {
  axios
    .get(`${API_HOST.url}/book`)
    .then(ress => {
      // console.log('buku :', ress.data.data.buku);
      dispatch({type: 'SET_BOOK', value: ress.data.data.buku});
    })
    .catch(err => {
      console.log('err', err);
    });
};
