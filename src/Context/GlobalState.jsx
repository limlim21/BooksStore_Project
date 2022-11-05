import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  favorite: localStorage.getItem("favorite")
    ? JSON.parse(localStorage.getItem("favorite"))
    : [],
  readBook: localStorage.getItem("readBook")
    ? JSON.parse(localStorage.getItem("readBook"))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(state.favorite));
    localStorage.setItem("readBook", JSON.stringify(state.readBook));
  }, [state]);

  // actions
  const addBookToFavorite = (book) => {
    dispatch({ type: "ADD_BOOK_TO_FAVORITE", payload: book });
  };

  const removeBookFromFavorite = (id) => {
    dispatch({ type: "REMOVE_BOOK_FROM_FAVORITE", payload: id });
  };

  const addBookToRead = (book) => {
    dispatch({ type: "ADD_BOOK_TO_READ", payload: book });
  };

  const moveToFavorite = (book) => {
    dispatch({ type: "MOVE_TO_FAVORITE", payload: book });
  };

  const removeFromRead = (id) => {
    dispatch({ type: "REMOVE_FROM_READ", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        favorite: state.favorite,
        readBook: state.readBook,
        addBookToFavorite,
        removeBookFromFavorite,
        addBookToRead,
        moveToFavorite,
        removeFromRead,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
