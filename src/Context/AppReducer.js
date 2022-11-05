export default (state, action) => {
  switch (action.type) {
    case "ADD_BOOK_TO_FAVORITE":
      return {
        ...state,
        favorite: [action.playload, ...state.favorite],
      };
    case "REMOVE_BOOK_FROM_FAVORITE":
      return {
        ...state,
        favorite: state.favorite.filter((book) => book.id !== action.playload),
      };
    case "ADD_BOOK_TO_READ":
      return {
        ...state,
        favorite: state.favorite.filter(
          (book) => book.id !== action.playload.id
        ),
      };
    case "MOVE_TO_FAVORITE":
      return {
        ...state,
        readBook: state.readBook.filter(
          (book) => book.id !== action.playload.id
        ),
        favorite: [action.playload, ...state.favorite],
      };
    case "REMOVE_FROM_READ":
      return {
        ...state,
        readBook: state.readBook.filter((book) => book.id !== action.playload0),
      };
    default:
      return state;
  }
};
