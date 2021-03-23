export const FETCH_BOOK_STORE_LIST_START = "FETCH_BOOK_STORE_LIST_START";
export const FETCH_BOOK_STORE_LIST_END = "FETCH_BOOK_STORE_LIST_END";

export const fetchBookStore = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_BOOK_STORE_LIST_START });
    const response = await fetch("bookStore.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (response.ok) {
      let result = await response.json();
      dispatch({ type: FETCH_BOOK_STORE_LIST_END, data: result });
    }
  };
};
