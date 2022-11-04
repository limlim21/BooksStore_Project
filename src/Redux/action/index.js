// For Add Item to Cart
export const addCart = (book) => {
  return {
    type: "ADDITEM",
    playload: book,
  };
};

// For Delete Item to Cart
export const delCart = (book) => {
  return {
    type: "DELITEM",
    playload: book,
  };
};
