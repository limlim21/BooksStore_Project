import { createContext, useContext } from "react";
import { useState } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("Error nih ");
  }
  return context;
};

const AppContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [readBook, setReadBook] = useState([]);

  const addToFavorites = (book) => {
    const oldFavorites = [...favorites];
    const newFavorites = oldFavorites.concat(book);

    setFavorites(newFavorites);
  };

  const removeFromFavorites = (id) => {
    const oldFavorites = [...favorites];
    const newFavorites = oldFavorites.filter((book) => book.id !== id);

    setFavorites(newFavorites);
  };

  const addToReadBook = (book) => {
    const oldReadBook = [...readBook];
    const newReadBook = oldReadBook.concat(book);

    setReadBook(newReadBook);
  };

  const removeFromReadBook = (id) => {
    const oldReadBook = [...readBook];
    const newReadBook = oldReadBook.filter((book) => book.id !== id);

    setReadBook(newReadBook);
  };

  const moveFavoriteToRead = (id) => {
    const oldFavorites = [...favorites];
    const newReadBook = oldFavorites.filter((book) => book.id !== id);

    setReadBook(newReadBook);
  };

  return (
    <AppContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        readBook,
        addToReadBook,
        removeFromReadBook,
        moveFavoriteToRead,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
