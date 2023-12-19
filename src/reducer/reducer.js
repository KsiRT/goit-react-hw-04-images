export const initialState = {
  images: [],
  query: 'cat',
  total: null,
  page: 0,
  per_page: 12,
  largeImageURL: '',
  loading: false,
  isModalOpen: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        query: action.payload,
        images: [],
        page: 1,
      };

    case 'OPEN_IMG':
      return {
        ...state,
        largeImageURL: action.payload,
        isModalOpen: true,
      };

    case 'LOAD_MORE':
      return {
        ...state,
        page: action.payload,
      };
    case 'LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'UPDATE_IMAGES':
      return {
        ...state,
        images: [...state.images, ...action.payload.hits],
        total: action.payload.total,
      };
    case 'TOGGLE_MODAL':
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };

    default:
      return state;
  }
};
