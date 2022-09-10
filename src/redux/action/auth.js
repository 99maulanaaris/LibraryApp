import axios from 'axios';
import {API_HOST} from '../../config';
import {showMessage, storeData} from '../../utils';
import {setLoading} from './global';

export const SignUpAction = (dataRegister, navigation) => dispatch => {
  axios
    .post(`${API_HOST.url}/register`, dataRegister)
    .then(ress => {
      // Simpan Data User
      storeData('userProfile', ress.data.data.user);
      // Simpan Token
      storeData('token', {
        value: `${ress.data.data.token_type} ${ress.data.data.access_token}`,
      });
      dispatch(setLoading(false));
      navigation.replace('MainApp');
    })
    .catch(err => {
      showMessage('Gagal Register');
      dispatch(setLoading(false));
    });
};

export const LoginAction = (form, navigation) => dispatch => {
  dispatch(setLoading(true));
  axios
    .post(`${API_HOST.url}/login`, form)
    .then(ress => {
      dispatch(setLoading(false));
      storeData('userProfile', ress.data.data.user);
      storeData('token', {
        value: `${ress.data.data.token_type} ${ress.data.data.access_token}`,
      });
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    })
    .catch(err => {
      dispatch(setLoading(false));
      showMessage('Gagal Login');
    });
};
