import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import BookDetails from "../Components/Pages/BookDetails";
import axios from "axios";

const BookDetailPageContainer = () => {
  //  const { id } = useParams();
  //  const [detailBookData, setDetailBookData] = useState();
  //  const books = useSelector((state) => state.data.books);

  //  useEffect(() => {
  //    const searchedBook = books.find((book) => book.id === +id);
  //    if (searchedBook) {
  //     setDetailBookData(searchedBook);
  //   }
  //  }, [id]);

  return <BookDetails />;
};

export default BookDetailPageContainer;
