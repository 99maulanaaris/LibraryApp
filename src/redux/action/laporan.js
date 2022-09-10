import axios from 'axios';
import {API_HOST} from '../../config';
import {getData, storeData} from '../../utils';

import {setLoading} from './global';

export const getDataPinjaman = () => dispatch => {
  dispatch(setLoading(true));
  getData('token').then(ress => {
    axios
      .get(`${API_HOST.url}/loan`, {
        headers: {
          Authorization: ress.value,
        },
      })
      .then(ress => {
        dispatch(setLoading(false));
        // console.log(ress.data.data);
        storeData('userPinjaman', ress.data.data);
        dispatch({type: 'SET_PINJAMAN', value: ress.data.data});
      })
      .catch(err => {
        dispatch(setLoading(false));
        console.log('err', err);
      });
  });
};
export const getDataKembali = () => dispatch => {
  dispatch(setLoading(true));
  getData('token').then(ress => {
    axios
      .get(`${API_HOST.url}/check`, {
        headers: {
          Authorization: ress.value,
        },
      })
      .then(ress => {
        dispatch(setLoading(false));
        // // storeData('userPinjaman', ress.data.data);
        dispatch({type: 'SET_KEMBALI', value: ress.data.data});
      })
      .catch(err => {
        dispatch(setLoading(false));
        console.log('err', err);
      });
  });
};

export const Checkout = () => dispatch => {
  dispatch(setLoading(true));
  getData('token').then(ress => {
    axios
      .post(`${API_HOST.url}/checkout`, data, {
        headers: {
          Authorization: ress.value,
        },
      })
      .then(ress => {
        dispatch(setLoading(false));
      })
      .catch(err => {
        dispatch(setLoading(false));
        console.log('err:', err);
      });
  });
};

export const getHistory = () => dispatch => {
  dispatch(setLoading(true));
  getData('token').then(ress => {
    axios
      .get(`${API_HOST.url}/history`, {
        headers: {
          Authorization: ress.value,
        },
      })
      .then(ress => {
        dispatch(setLoading(false));

        storeData('userHistory', ress.data.data);
        dispatch({type: 'SET_HISTORY', value: ress.data.data});
      })
      .catch(err => {
        dispatch(setLoading(false));
        console.log('err', err);
      });
  });
};

export const getTelat = () => dispatch => {
  dispatch(setLoading(true));
  getData('token').then(ress => {
    axios
      .get(`${API_HOST.url}/telat`, {
        headers: {
          Authorization: ress.value,
        },
      })
      .then(ress => {
        dispatch(setLoading(false));
        // storeData('userTelat', ress.data.data);
        dispatch({type: 'SET_TELAT', value: ress.data.data});
      })
      .catch(err => {
        dispatch(setLoading(false));
        console.log('err', err);
      });
  });
};
