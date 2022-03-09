export const ADD_BOOKMARK = "ADD_BOOKMARK";
export const REMOVE_BOOKMARK = "REMOVE_BOOKMARK";
export const CLEAR_BOOKMARK = "CLEAR_BOOKMARK";

export const addBookmark = (countryName: string): AddBookmarkAction => {
  return {
    type: ADD_BOOKMARK,
    payload: countryName,
  };
};

export const removeBookmark = (countryName: string): RemoveBookmarkAction => {
  return {
    type: REMOVE_BOOKMARK,
    payload: countryName,
  };
};

export const clearBookmark = (): ClearBookmarkAction => {
  return {
    type: CLEAR_BOOKMARK,
  };
};

type AddBookmarkAction = {
  type: typeof ADD_BOOKMARK;
  payload: string;
};

type RemoveBookmarkAction = {
  type: typeof REMOVE_BOOKMARK;
  payload: string;
};

type ClearBookmarkAction = {
  type: typeof CLEAR_BOOKMARK;
};

export type Actions =
  | AddBookmarkAction
  | RemoveBookmarkAction
  | ClearBookmarkAction;
