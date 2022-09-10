const initLaporan = {
  book: [],
  kembali: [],
  history: [],
  telat: [],
};

export const laporanReducer = (state = initLaporan, action) => {
  if (action.type === 'SET_PINJAMAN') {
    return {
      ...state,
      book: action.value,
    };
  }
  if (action.type === 'SET_KEMBALI') {
    return {
      ...state,
      kembali: action.value,
    };
  }

  if (action.type === 'SET_HISTORY') {
    return {
      ...state,
      history: action.value,
    };
  }
  if (action.type === 'SET_TELAT') {
    return {
      ...state,
      telat: action.value,
    };
  }
  return state;
};
