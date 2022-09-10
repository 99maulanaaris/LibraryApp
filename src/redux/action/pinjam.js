import axios from 'axios';
import {API_HOST} from '../../config';
import {getData} from '../../utils';

export const pinjamBuku = (data, navigation) => dispatch => {
  getData('token').then(ress => {
    axios
      .post(`${API_HOST.url}/loan`, data, {
        headers: {
          Authorization: ress.value,
        },
      })
      .then(ress => {
        // dispatch({type: 'SET_PINJAMAN', value: ress.data.data});
        navigation.navigate('SuccessPage');
      })
      .catch(err => {
        console.log('err:', err);
      });
  });
};
