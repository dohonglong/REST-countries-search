import { ADD_BOOKMARK, REMOVE_BOOKMARK } from "./action";

const initialState = {
  bookmarkCountries: [],
};

const reducer = (state = initialState, action) => {
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

    default:
      return state;
  }
};

export default reducer;
