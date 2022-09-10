const initStateRegister = {
  nama: '',
  email: '',
  password: '',
};

export const registerReducer = (state = initStateRegister, action) => {
  switch (action.type) {
    case 'SET_REGISTER':
      return {
        ...state,
        nama: action.value.nama,
        email: action.value.email,
        password: action.value.password,
      };
    default:
      return state;
  }
};
