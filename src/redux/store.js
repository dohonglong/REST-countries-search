import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./reducer";

const initialState = {
  bookmarkCountries: [],
};

const storeFactory = () => {
  const bookmarkList = localStorage.getItem("countries");
  if (bookmarkList) {
    initialState.bookmarkCountries = JSON.parse(bookmarkList);
  }

  const store = createStore(reducer, initialState, composeWithDevTools());

  store.subscribe(() => {
    const currentState = store.getState();
    const bookmarkList = currentState.bookmarkCountries;
    localStorage.setItem("countries", JSON.stringify(bookmarkList));
  });

  return store;
};

export default storeFactory;
