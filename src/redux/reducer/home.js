const initHome = {
  book: [],
};

export const homeReducer = (state = initHome, action) => {
  if (action.type === 'SET_BOOK') {
    return {
      ...state,
      book: action.value,
    };
  }

  return state;
};
