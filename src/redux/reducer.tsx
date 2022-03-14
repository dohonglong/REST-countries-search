import {
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  CLEAR_BOOKMARK,
  Actions,
} from "./action";

export type InitState = {
  bookmarkCountries: string[];
};

const initialState: InitState = {
  bookmarkCountries: [],
};

const reducer = (state = initialState, action: Actions): InitState => {
  switch (action.type) {
    case ADD_BOOKMARK:
      const countryName = action.payload;
      const isInList = state.bookmarkCountries.some(
        (name) => name === countryName
      );
      if (isInList) {
        return state;
      }
      return {
        ...state,
        bookmarkCountries: [...state.bookmarkCountries, countryName],
      };

    case REMOVE_BOOKMARK:
      const removeCountryName = action.payload;
      const newList = state.bookmarkCountries.filter(
        (name) => name !== removeCountryName
      );
      return {
        ...state,
        bookmarkCountries: newList,
      };

    case CLEAR_BOOKMARK:
      return {
        ...state,
        bookmarkCountries: [],
      };

    default:
      return state;
  }
};

export default reducer;
