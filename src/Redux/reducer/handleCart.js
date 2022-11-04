import { Routes } from "react-router";

const cart = [];
const handleCart = (state = cart, action) => {
  const book = action.playload;
  switch (action.type) {
    case "ADDITEM":
      //check if product is already exist
      const exist = state.find((x) => x.id === book.id);
      if (exist) {
        //Increase the Quantity
        return state.map((x) =>
          x.id === book.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const book = action.playload;
        return [
          ...state,
          {
            ...book,
            qty: 1,
          },
        ];
      }
      break;

    case "DELITEM":
      const exist1 = state.find((x) => x.id === book.id);
      if (exist.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === book.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;

    default:
      state;
      break;
  }
};
export default handleCart;
