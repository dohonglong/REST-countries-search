export const ADD_BOOKMARK = "ADD_BOOKMARK";
export const REMOVE_BOOKMARK = "REMOVE_BOOKMARK";

export const addBookmark = (countryName) => {
  return {
    type: ADD_BOOKMARK,
    payload: countryName,
  };
};

export const removeBookmark = (countryName) => {
  return {
    type: REMOVE_BOOKMARK,
    payload: countryName,
  };
};
