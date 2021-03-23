import {
  FETCH_BOOK_STORE_LIST_START,
  FETCH_BOOK_STORE_LIST_END,
} from "./actions";

const initialState = {
  bookStoreList: null,
};

const bookStore=(state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOK_STORE_LIST_START:
      return { ...state, bookStoreList: null };
    case FETCH_BOOK_STORE_LIST_END:
      return { ...state, bookStoreList: action.data };
    default:
      return { ...state };
  }
};
export default bookStore