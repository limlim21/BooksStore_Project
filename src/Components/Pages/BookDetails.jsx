import React, { useState, useEffect } from "react";
import "../../App";
import { Image, Stack } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BOOK_DETAILS_URL } from "../../API";
import { AiFillStar } from "react-icons/ai";
import { useAppContext } from "../Context/appContext";
import { useNavigate } from "react-router-dom";

const BookDetails = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();

  const { readBook, addToReadBook, removeFromReadBook } = useAppContext();
  const readChecker = (id) => {
    const boolean = readBook.some((book) => book.id === id);
    return boolean;
  };

  useEffect(() => {
    axios
      .get(`${BOOK_DETAILS_URL}/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <div className="Book-Details">
        <div className="container d-flex justify-content-center align-items-center mt-5">
          <div className="card mb-3" style={{ maxWidth: "1200px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={book?.image_url}
                  className="img-fluid rounded-start"
                  style={{ width: "800px" }}
                  alt="#"
                />
              </div>
              <div className="col-md-8 mt-2">
                <div className="card-body" style={{ marginLeft: "10px" }}>
                  <h6 className="card-text">
                    <small className="text-muted">{book?.authors}</small>
                  </h6>
                  <h5 className="card-title">
                    <b>{book?.title}</b>
                  </h5>
                  <hr />
                  <p className="card-title">
                    <b> Book Description</b>
                  </p>
                  <p className="card-text">
                    <small>{book?.description}</small>
                  </p>
                  <div className="price-book">
                    <h6 className="card-title">
                      <b style={{ color: "black" }}> Price</b>
                    </h6>
                    <h5 className="card-text">
                      <small>Today, It's FREE!</small>
                    </h5>
                  </div>

                  <p className="card-title">
                    <b> Genres</b>
                  </p>
                  <p className="card-text">
                    <small>{book?.genres}</small>
                  </p>
                  <p className="card-title">
                    <b>Detail</b>
                  </p>
                  <p className="row row-cols-2">
                    <p className="col card-title d-flex flex-column">
                      <small>Number of pages</small>
                      <small>{book?.num_pages}</small>
                    </p>
                    <p className="col card-title d-flex flex-column">
                      <small>Publisher</small>
                      <small>-</small>
                    </p>
                    <p className="col card-title d-flex flex-column">
                      <small>Rating</small>
                      <small>
                        <AiFillStar className="rating-icon" />
                        {book?.rating} / 5
                      </small>
                    </p>
                    <p className="col card-title d-flex flex-column">
                      <small>Language</small>
                      <small>English</small>
                    </p>
                  </p>
                  <div
                    className="d-flex flex-row justify-content-end"
                    style={{ paddingRight: "10px" }}
                  >
                    {readChecker(book.id) ? (
                      <button
                        className="btn btn-outline-success"
                        onClick={() => removeFromReadBook(book.id)}
                      >
                        Delete Book
                      </button>
                    ) : (
                      <button
                        className="btn btn-success"
                        onClick={() => addToReadBook(book)}
                      >
                        Add to Read
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
